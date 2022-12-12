import {createReduxStore} from "../../store/store";
import {Provider, useDispatch} from "react-redux";
import React, {FC, ReactNode, useEffect} from "react";
import {DeepPartial} from "@reduxjs/toolkit";
import {IStore} from "../../types/storeTypes";

interface IStoreProviderProps {
    children: ReactNode;
    initialStore?: DeepPartial<IStore>
}

const StoreProvider: FC<IStoreProviderProps> = (props) => {
    const {
        initialStore,
        children
    } = props

    const store = createReduxStore(initialStore as IStore);

    return (
    <Provider store={store}>
        {children}
    </Provider>
    );
};

export default StoreProvider;

