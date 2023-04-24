import { FC, memo } from "react";
import "./index.css";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

interface ISortField {
    name: string,   
    active?: "asc" | "desc" | false,
    setSort: (name: string) => void
}

const SortField: FC<ISortField> = ({ name, active, setSort }) => {
    return (
        <div
            className="sort-field"
        >
            <p
                className={`fs-3 text-capitalize ${active ? "text-light " : "text-dark"}`}
                onClick={() => setSort(name)}>
                {name}
            </p>

            <span className="fs-3 text-dark text-dark  arrow">
                {active !== "asc" ? <BsArrowDownShort role="down" /> : <BsArrowUpShort role="up" />}
            </span>
            {active && <span className="fs-3 text-light active">
                {active === "asc" ? <BsArrowDownShort role="down" /> : <BsArrowUpShort role="up" />}
            </span>}
        </div>
        
    )
}

export default memo(SortField, (prev: ISortField, next: ISortField) => {
    return prev.active === next.active && next.name === prev.name
})