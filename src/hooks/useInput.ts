import { useState,useCallback } from 'react';

export const useInput = (validateFunc?: (value: string) => boolean, initialState?: string,) => {
    const [value, setValue] = useState<string>(initialState || "");

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(() => event.target.value)
    }, []);
    const reset = useCallback(() => setValue(() => ""), []);
    const validate = useCallback(() => {
        if (validateFunc) {
            return validateFunc(value)
        }
    }, [value])

    return {
        reset,
        bind: {
            value,
            onChange: onChange
        },
        validate,
    }
};