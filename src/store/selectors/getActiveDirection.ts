import {IStore} from "../../types/storeTypes";
import {IDirection} from "../../types/types";

export const getActiveDirection = (state: IStore, type: 'getting'|'giving'):IDirection=> {
    let methodType = type === 'getting'? 'activeGettingDirection':'activeGivingDirection'
    // @ts-ignore
    return state.currency[methodType]
}
