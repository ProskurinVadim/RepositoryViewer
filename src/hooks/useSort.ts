import { useState, useCallback, useMemo } from "react";

import { SortFunction } from "../utils/sort";
import { ISort} from "../types";


export const useSort = (data: any[]) => {

    // add type for making this hook reusable
    const [sort, setSort] = useState<ISort>({ direction:"asc", key:"", type:""});


    const handelSetSort = useCallback((i: string, type: "" | "bucket") => {
        const newSort: ISort = (sort.key === i && sort.direction !== "desc")
            ? { ...sort, direction: "desc", } : { ...sort,key: i, direction: "asc", };

        setSort(() => ({ ...newSort,type }));

    }, [sort]);

    

    const sortedData = useMemo(() => data.length ? data.sort((a, b) => SortFunction(sort.type,a, b, sort.direction,sort.key)) : data, [data, sort]);
    return {
        sort,
        setSort : handelSetSort,
        data : sortedData.length ? sortedData : []
    }
};