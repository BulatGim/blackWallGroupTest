import {IStore} from "../../types/storeTypes";

export const getCurrency = (state:IStore, type: 'getting'|'giving') => {
    let methodType = type === 'getting'? 'gettingCurrency':'givenCurrency'
    // @ts-ignore
    return state.currency[methodType]
}