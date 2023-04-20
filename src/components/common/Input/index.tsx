import { FC } from "react";

interface IInput {
    onChange: () => void,
    placeholder: string,
    className?: string,
}

const Input: FC<IInput> = ({ placeholder="Enter Value", onChange, className = "" }) => {
    return (
        <input className={className} onChange={onChange} />
    )
}

export default Input