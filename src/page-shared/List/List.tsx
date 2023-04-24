import { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";
import { IListItem } from "../../types";
import { Button } from "../../components/common";
import {useSort} from "../../hooks/useSort"
import Condition, { If, Else } from "../../hoc/Conditional/Condition";
import Loadable from "../../hoc/Loadable";

interface IList {
	loading: boolean,
	onDelete: (id: number) => void,
	onDeleteAll: () => void,
	onAdd: (name:string, amount:number) => void
	onFavorites: (id:number) => void,
	items: IListItem[]
}

const List: FC<IList> = ({ onDelete, onFavorites, onDeleteAll, onAdd, items, loading }) => {
	const { sort, setSort, data } = useSort(items);
	const handelSort = (name: string) => setSort(name, "bucket");
	return (
		<div>
			<ListHeader sort={sort} setSort={handelSort} onAdd={onAdd} loading={loading}/>
			<Loadable loading={loading}>
				<Condition condition={Boolean(data.length)}>
					<If>
						<ListGroup variant="flush" className="overflow-auto" style={{ height: "55vh", }}>
							{data.map((item: IListItem, i: number) =>
								<ListItem
									onDelete={() => onDelete(i)}
									onFavorites={() => onFavorites(i)}
									item={item} key={`list-item-${i}`}
								/>
							)}
						</ListGroup>
						<div className="d-grid gap-2 col-2 mx-auto">
							<Button className="fs-5 mt-2 btn-danger" onClick={onDeleteAll} text="Delete All" disabled={!data.length} />
						</div>
					</If>
					<Else><h2 className="fs-2 text-center mb-5">No items in List</h2></Else>
				</Condition>
			</Loadable>
		</div>
	)
}

export default List