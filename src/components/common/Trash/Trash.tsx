import { FC } from "react";
import { BsFillTrashFill } from "react-icons/bs";

interface IDelete {
    onClick: () => void
    className?: string,
}

const Trash: FC<IDelete> = ({ onClick, className }) => {
    return (
        <span className={className} onClick={onClick}>
            <BsFillTrashFill role={"trash"}/>
        </span>
    )
}

export default Trash