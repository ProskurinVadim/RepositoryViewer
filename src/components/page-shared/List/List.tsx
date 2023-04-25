import { FC } from "react";
import { IListItem } from "../../../types";
import ListItem from "./ListItem";


interface IList {
    data: IListItem[]
}

const List: FC<IList> = ({ data }) => {
    return (
        <ul className="list">
            {data.map((elem, i) => <ListItem key={"list-item-" + i} {...elem} /> )}
        </ul>
    )
}

export default List