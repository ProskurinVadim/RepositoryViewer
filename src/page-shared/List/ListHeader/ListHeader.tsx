import { useState, FC } from "react";
import SortField from "./SortField";
import { useInput } from "../../../hooks/useInput";
import { Button, MemorizedInput } from "../../../components/common";
import { numberValidator, lettersValidator } from "../../../utils/validate";
import { ISort } from "../../../types";

interface IListHeader {
    onAdd: (name:string, amount: number) => void,
    setSort: (name: string) => void,
    sort: ISort,
    loading: boolean | undefined
}

const sortNames = ["name", "amount"];


const ListHeader: FC<IListHeader> = ({ setSort, sort, onAdd, loading }) => {

    const [error,setError] = useState("")
    const { bind: nameBind, reset: nameReset, validate: nameValidate } = useInput(lettersValidator);
    const { bind: amountBind, reset: amountReset, validate: amountValidate } = useInput(numberValidator);
    const onSubmit = () => {
        if (!nameValidate()) {
            setError(() => "name must contain only letters");
        } else if (!amountValidate()) {
            setError(() => "amount must contain only numbers");
        } else {
            setError(() => "")
            // Addet capitalaze for first letter to avoid sorting uper and lower case letters
            const name = nameBind.value.charAt(0).toUpperCase() + nameBind.value.slice(1)
            onAdd(name, Number(amountBind.value));
            nameReset();
            amountReset();
        }
    }

    return (
        <div>
            <h2 className={"fs-3 text text-light mt-3"}>Add product in your bucket:</h2>
            <div className="d-flex align-items-center mt-4">
                {/*memorized inputs for stoping updates*/}
                <MemorizedInput {...nameBind} placeholder="Enter name" className="me-1"/>
                <MemorizedInput {...amountBind} placeholder="Enter amount" className="me-1 ms-1" />
                <Button onClick={onSubmit} text="Add Item" role="submit-button" className="ms-1 btn-success" disabled={loading}/>
            </div>
            <p role="error" className={`mt-3 fs-5 text text-danger  ${error ? "visible" : "invisible"}`}>Sorry {error && error}</p>
            <h2 className={".fs-3 text text-light mt-1"}>Choose sort</h2>
            <div className="d-flex justify-content-between">
                {/*memorized SortFields for stoping updates*/}
                {sortNames.map((elem, i) =>
                    <SortField name={elem} active={sort.key === elem ? sort.direction : false} setSort={setSort} key={`sort-name-${i}`}/>
                )}
            </div>
        </div>
    )
}

export default ListHeader