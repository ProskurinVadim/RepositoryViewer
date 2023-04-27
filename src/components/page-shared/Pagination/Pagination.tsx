import { FC } from "react";
import PaginationItem from "./PaginationItem";
import Condition, { If } from "../../../hoc/Conditional/Condition";
interface IPagination {
    pageLimit: number,
    page: number,
    setPage: (page:number) => void,

}

const getArrLength = (pageLimit: number, pageScale: number) =>
    pageLimit >= 10 && pageScale <= pageLimit - 10 ? pageScale === 1 ? 10 : 11 : pageLimit - pageScale + 1;

const Pagination: FC<IPagination> = ({ pageLimit, page, setPage, }) => {
    const pageScale = page < 10 ? 1 : Math.floor(page / 10) * 10;
    const maxScale = pageLimit - 10;
    const paginationArr = new Array(getArrLength(pageLimit, pageScale)).fill(0);

    const handelSetPage = (page: number) => setPage(page);
    const handelSetNextPage = () => page !== pageLimit && setPage(page + 1);
    const handelSetPreviousPage = () => page !== 1 && setPage(page - 1);

    return (
        <ul className="pagination">
            <Condition condition={pageScale !== 1}>
                <If>
                    <PaginationItem text="Previous" setPage={() => handelSetPreviousPage()} />
                    <PaginationItem text="1" setPage={() => handelSetPage(1)} />
                    <PaginationItem text={String(pageScale -1)} setPage={() => handelSetPage(pageScale -1)} active={pageScale -1 === page} />
                </If>
            </Condition>
            {
                paginationArr.map((_: number, i: number) =>
                    <PaginationItem
                        key={"pagination-item-" + i}
                        active={page === i + pageScale}
                        text={`${pageScale + i}`}
                        setPage={() => handelSetPage(pageScale + i)} />
                )
            }
            <Condition condition={pageScale < maxScale}>
                <If>
                    <PaginationItem text="Next" setPage={() => handelSetNextPage()} />
                    <PaginationItem text={String(pageLimit)} setPage={() => handelSetPage(pageLimit)} />
                </If>
            </Condition>
        </ul>
    )
}

export default Pagination