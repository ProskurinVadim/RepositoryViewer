import { FC } from "react";
import BButton from 'react-bootstrap/Button';



interface IButton {
    onClick: () => void,
    text?: string,
    className?: string
    [rest: string]: any;

}

const Button: FC<IButton> = ({ onClick, text = "Add", className, ...rest }) => {
    return <BButton onClick={onClick} className={`${className}`} {...rest}>{text}</BButton>

}

export default Button
