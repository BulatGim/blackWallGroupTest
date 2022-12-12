import {IStore} from "../../types/storeTypes";
import { ISelectItem} from "../../types/types";


const findGettingCurrencies = (state: IStore, array: ISelectItem[])=>{
    let res:ISelectItem[] = []
    state.currency.activeGettingDirection?.codes?.split(' ').forEach(item=>{
        for(let i = 0; i<array.length; i++){
            if(item === array[i].code){
                res.push(array[i])
            }
        }
    })
    return res
}

export const getAllGettingCurrencies = (state: IStore)  => {
    return findGettingCurrencies(state, state.currency.filter.find(item=>{
        return (item.from.code === state.currency.givenCurrency?.code )?(item.to):false
    })?.to || [])
}

export {};