import { FC } from "react";

interface IInput {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    placeholder?: string,
    className?: string,
    disable?: boolean,
}

const Input: FC<IInput> = ({ placeholder = "Enter Value", onChange, className = "", value, disable  }) => {
    return (
        <input className={"input " + className} onChange={onChange} value={value} placeholder={placeholder} disabled={disable} />
    )
}

export default Input