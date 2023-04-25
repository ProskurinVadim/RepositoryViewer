interface IListItem {
    name: string,
    author: string,
    description: string,
    language: string,
    stars: number,
    watch: number,
}

interface ICondition {
    condition?: boolean,
    children: React.ReactNode | string | null,
}

interface IIcon {
    className?: string
}

export type { IListItem, ICondition, IIcon }