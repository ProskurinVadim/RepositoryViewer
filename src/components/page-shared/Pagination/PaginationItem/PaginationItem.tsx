import { FC } from "react";

interface IItem {
    text: string,
    setPage: () => void,
    active?: boolean,
}

const PaginationItem: FC<IItem> = ({ text, setPage, active }) => {
    return (
        <li
            className={`pagination-item text__bold ${active ? "active" : ""}`}
            onClick={setPage}
        >
            {text}
        </li>
    )
}

export default PaginationItem