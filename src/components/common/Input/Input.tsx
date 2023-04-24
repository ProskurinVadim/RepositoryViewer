import { FC, memo } from "react";
import Form from 'react-bootstrap/Form';

interface IInput {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
    placeholder?: string,
    className?: string,
}

const Input: FC<IInput> = ({ className, placeholder = "Enter value", onChange, value }) => {
    return (
        <Form.Group className={`${className}`}>
            <Form.Control role="input" placeholder={placeholder} onChange={onChange} value={value} />
        </Form.Group>
    )
}

export default Input

export const MemorizedInput = memo(Input, (prev: IInput, next: IInput) => {
    return prev.value === next.value
});