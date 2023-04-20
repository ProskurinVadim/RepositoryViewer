import { FC } from "react";

interface IButton {
    onClick: () => void,
    text: string,
    className?: string,
}

const Button: FC<IButton> = ({ text, onClick, className=""}) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button