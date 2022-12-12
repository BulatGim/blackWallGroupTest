import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {currensyReducers} from './currencyLayer'
import {IStore} from "../types/storeTypes";

export function createReduxStore(initialStore?: IStore) {
    const rootStore: ReducersMapObject<IStore> = {
        currency: currensyReducers
    };

    return configureStore<IStore>({
        reducer: rootStore,
    });
}