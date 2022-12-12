export interface ISelectItem {
    code: string;
    name: string;
}

export interface IDirection {
    name: string;
    codes: string;
}

export interface IFilter {
    from: ISelectItem,
    to: ISelectItem[]
}

export type CurrencyMethod = 'giving' | 'getting'