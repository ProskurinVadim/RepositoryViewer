import { FC, useState, useEffect, useCallback } from "react";
import { Input } from "../../common";


interface ISearch {
    setSearch: (value: string) => void,
}

const Search: FC<ISearch> = ({ setSearch }) => {
    const [value, setValue] = useState<string>("React");

    useEffect(() => {
        const debounce = setTimeout(() => {
            setSearch(value)
        }, 500)

        return () => clearTimeout(debounce)
    }, [value])

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),[]);

    return (
        <div className="search">
            <Input onChange={onChange} value={value} className="search-input"/>
        </div>
    )
}

export default Search 