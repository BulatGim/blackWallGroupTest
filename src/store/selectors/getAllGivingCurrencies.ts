import {IStore} from "../../types/storeTypes";
import {ISelectItem} from "../../types/types";

export const getAllGivingCurrencies = (state: IStore)=> {
    let result: ISelectItem[] = []
    state.currency.activeGivingDirection?.codes.split(' ').forEach(item => {
        for(let i = 0; i<state.currency.directions.length; i++){
            if (item === state.currency.directions[i].code){
                result.push(state.currency.directions[i])
            }
        }
    })
    return result
}

export {}