import { FC } from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";
interface IStar {
    onClick: () => void
    favorites: boolean,
    className?: string,
}

const Star: FC<IStar> = ({ onClick, favorites, className}) => {
    return (
        <span className={className} onClick={onClick}>
            {favorites ? <BsFillStarFill role="fill-star" /> : <BsStar role="fill-star" />}
        </span>
    )
}

export default Star