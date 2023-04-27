import { FC, useEffect, useState, useCallback } from 'react';
import { RootState, AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { List, Pagination, Search } from "../page-shared";
import { search } from "../../redux/actions/repositoriesActions";
import Loadoble from "../../hoc/Loadable";
import Condition, { If, Else } from "../../hoc/Conditional/Condition";



const App: FC = () => {
    const [page, setPage] = useState<number>(1);
    const [value, setValue] = useState<string>("React")

    const { items, totalCount, loading } = useSelector((state: RootState) => state.repositories)
    const pageLimit = Math.ceil(totalCount / 20);
    const dispatch: AppDispatch = useDispatch();

    const handelSetPage = useCallback((page: number) => setPage((prev: number) => page), []);
    const handelSetValue = useCallback((value: string) => {
        handelSetPage(1);   
        setValue((prev: string) => value)
    }, [handelSetPage]);
    useEffect(() => {
        dispatch(search(page, value));
    }, [page, value, dispatch])

    return (
        <div className="page">
            <div className="container">
                <Search setSearch={handelSetValue} />
                <Loadoble loading={loading}>
                    <Condition condition={!items.length}>
                        <If>
                            <h1 className="text-center">No repository was found for your request</h1>
                        </If>
                        <Else>
                            <List data={items} />
                        </Else>
                    </Condition>
                </Loadoble>
                <Pagination pageLimit={pageLimit} page={page} setPage={handelSetPage} />
            </div>
        </div>
  );
}

export default App;
