import {IStore} from "../../types/storeTypes";


export const getAllDirections = (state: IStore, type: 'getting'|'giving') => {
    const methodType = type === 'getting'?('mainGettingDirections'):('mainGivingDirections')
    return state.currency[methodType]
};