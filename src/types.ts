interface ICondition {
    condition?: boolean,
    children: React.ReactNode | string | null,
}

interface ISort {
    direction: "asc" | "desc",
    key: string,
    type: "" | "bucket"
}

interface IListItem {
    name: string,
    favorites: boolean,
    amount: number
    description?: string,
    image?: string
}

export type { IListItem, ICondition, ISort }