import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IDirection, IFilter, ISelectItem} from "../types/types";

export interface ICurrencyLayer {
    directions: ISelectItem[];
    givenCurrency?:ISelectItem;
    gettingCurrency?: ISelectItem;
    filter: IFilter[];
    mainGivingDirections: IDirection[];
    mainGettingDirections: IDirection[];
    activeGivingDirection?: IDirection;
    activeGettingDirection?: IDirection;
}

let initialState: ICurrencyLayer;
initialState = {
    directions: [
        {
            "code": "BTC",
            "name": "Bitcoin BTC "
        },
        {
            "code": "ETH",
            "name": "Ethereum ETH "
        },
        {
            "code": "CASHUSD",
            "name": "Наличные USD "
        },
        {
            "code": "CASHRUB",
            "name": "Наличные RUB "
        },
        {
            "code": "ACRUB",
            "name": "Альфа-банк RUB "
        },
        {
            "code": "SBERRUB",
            "name": "Сбербанк RUB "
        },
        {
            "code": "TCSBRUB",
            "name": "Тинькофф RUB "
        },
        {
            "code": "USDTTRC",
            "name": "Tether TRC20 USDT "
        },
    ],
    filter: [
        {
            "from": {
                "code": "BTC",
                "name": "Bitcoin BTC "
            },
            "to": [
                {
                    "code": "CASHRUB",
                    "name": " Наличные RUB"
                },
                {
                    "code": "CASHUSD",
                    "name": " Наличные USD"
                },
                {
                    "code": "SBERRUB",
                    "name": " Сбербанк RUB"
                },
                {
                    "code": "ACRUB",
                    "name": " Альфа-банк RUB"
                },
                {
                    "code": "TCSBRUB",
                    "name": " Тинькофф RUB"
                },
                {
                    "code": "USDTTRC",
                    "name": " Tether TRC-20 USDTTRC"
                }
            ]
        },
        {
            "from": {
                "code": "ETH",
                "name": "Ethereum ETH "
            },
            "to": [
                {
                    "code": "CASHUSD",
                    "name": " Наличные USD"
                },
                {
                    "code": "CASHRUB",
                    "name": " Наличные RUB"
                },
                {
                    "code": "SBERRUB",
                    "name": " Сбербанк RUB"
                },
                {
                    "code": "ACRUB",
                    "name": " Альфа-банк RUB"
                },
                {
                    "code": "TCSBRUB",
                    "name": " Тинькофф RUB"
                },
            ]
        },
        {
            "from": {
                "code": "CASHUSD",
                "name": "Наличные USD "
            },
            "to": [
                {
                    "code": "BTC",
                    "name": " Bitcoin BTC"
                },
                {
                    "code": "ETH",
                    "name": " Ethereum ETH"
                },
                {
                    "code": "USDTTRC",
                    "name": " Tether TRC20 USDT"
                }
            ]
        },
        {
            "from": {
                "code": "CASHRUB",
                "name": "Наличные RUB "
            },
            "to": [
                {
                    "code": "BTC",
                    "name": " Bitcoin BTC"
                },
                {
                    "code": "ETH",
                    "name": " Ethereum ETH"
                },
                {
                    "code": "USDTTRC",
                    "name": " Tether TRC20 USDT"
                }
            ]
        },
        {
            "from": {
                "code": "ACRUB",
                "name": "Альфа-банк RUB "
            },
            "to": [
                {
                    "code": "BTC",
                    "name": " Bitcoin BTC"
                },
                {
                    "code": "ETH",
                    "name": " Ethereum ETH"
                },
                {
                    "code": "USDTTRC",
                    "name": " Tether TRC20 USDT"
                }
            ]
        },
        {
            "from": {
                "code": "SBERRUB",
                "name": "Сбербанк RUB "
            },
            "to": [
                {
                    "code": "BTC",
                    "name": " Bitcoin BTC"
                },
                {
                    "code": "ETH",
                    "name": " Ethereum ETH"
                },
                {
                    "code": "USDTTRC",
                    "name": " Tether TRC20 USDT"
                },
                {
                    "code": "PMUSD",
                    "name": " PerfectMoney USD"
                },
                {
                    "code": "TRX",
                    "name": " TRON TRX"
                },
                {
                    "code": "P24UAH",
                    "name": " Приват24 UAH"
                },
                {
                    "code": "MONOBUAH",
                    "name": " Монобанк UAH"
                },
                {
                    "code": "CARDUAH",
                    "name": " Visa/Mastercard UAH"
                }
            ]
        },
        {
            "from": {
                "code": "TCSBRUB",
                "name": "Тинькофф RUB "
            },
            "to": [
                {
                    "code": "BTC",
                    "name": " Bitcoin BTC"
                },
                {
                    "code": "ETH",
                    "name": " Ethereum ETH"
                },
                {
                    "code": "USDTTRC",
                    "name": " Tether TRC20 USDT"
                },
                {
                    "code": "PMUSD",
                    "name": " PerfectMoney USD"
                },
                {
                    "code": "TRX",
                    "name": " TRON TRX"
                },
                {
                    "code": "P24UAH",
                    "name": " Приват24 UAH"
                },
                {
                    "code": "MONOBUAH",
                    "name": " Монобанк UAH"
                }
            ]
        },
        {
            "from": {
                "code": "USDTTRC",
                "name": "Tether TRC20 USDT "
            },
            "to": [
                {
                    "code": "ACRUB",
                    "name": " Альфа RUB"
                },
                {
                    "code": "TCSBRUB",
                    "name": " Тинькофф RUB"
                },
                {
                    "code": "SBERRUB",
                    "name": " Сбербанк RUB"
                },
                {
                    "code": "CARDRUB",
                    "name": " Visa/Mastercard RUB"
                },
                {
                    "code": "QWRUB",
                    "name": " Qiwi RUB"
                },
                {
                    "code": "CASHRUB",
                    "name": " Наличные RUB"
                },
                {
                    "code": "CASHUSD",
                    "name": " Наличные USD"
                },
                {
                    "code": "CARDUAH",
                    "name": " Visa/Mastercard UAH"
                },
                {
                    "code": "MONOBUAH",
                    "name": " Монобанк UAH"
                },
                {
                    "code": "WIREUAH",
                    "name": " Любой банк UAH"
                },
                {
                    "code": "OSDBUAH",
                    "name": " Ощадбанк UAH"
                },
                {
                    "code": "P24UAH",
                    "name": " Приват24 UAH"
                },
                {
                    "code": "BTC",
                    "name": " Bitcoin BTC"
                },
                {
                    "code": "CASHAED",
                    "name": " Наличные AED"
                },
                {
                    "code": "CNTRUB",
                    "name": " Qiwi Contact RUB"
                }
            ]
        }
    ],
    mainGivingDirections : [
    {
        codes: 'BTC ETH USDTTRC CASHUSD CASHRUB ACRUB SBERRUB TCSBRUB TRX  P24UAH MONOBUAH PMUSD CARDUAH',
        name: 'Все',
    }, {
        codes: 'BTC ETH USDTTRC TRX',
        name: 'Криптовалюта',
    },{
        codes: 'CASHUSD CASHRUB',
        name: 'Наличные',
    },{
        codes: 'ACRUB SBERRUB TCSBRUB P24UAH MONOBUAH',
        name: 'Банки',
    }
],
    mainGettingDirections: [
    {
        codes: 'BTC ETH USDTTRC CASHUSD CASHRUB ACRUB SBERRUB TCSBRUB TRX P24UAH MONOBUAH PMUSD CARDUAH',
        name: 'Все',
    }, {
        codes: 'BTC ETH USDTTRC TRX',
        name: 'Криптовалюта',
    },{
        codes: 'CASHUSD CASHRUB',
        name: 'Наличные',
    },{
        codes: 'ACRUB SBERRUB TCSBRUB P24UAH MONOBUAH',
        name: 'Банки',
    }
],
};

export const currencyLayer = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        initialize: (state)=>{
            state.activeGivingDirection = state.mainGivingDirections[0];
            state.activeGettingDirection = state.mainGettingDirections[0];
            state.givenCurrency = state.directions[0];
        },
        changeMainGivingDirection: (state, action: PayloadAction<string>) => {
            state.activeGivingDirection = state.mainGivingDirections.find(item=>{
                return item.codes === action.payload
            })
            state.givenCurrency = state.directions?.find(item => {
                return item.code === state.activeGivingDirection?.codes.split(' ')[0]
            })
            state.activeGettingDirection = state.mainGettingDirections[0]
            state.gettingCurrency = undefined
        },
        changeMainGettingDirection: (state, action: PayloadAction<string>) => {
            state.activeGettingDirection = state.mainGettingDirections.find(item=>{
                return item.codes === action.payload
            })
            state.gettingCurrency = undefined
        },
        changeGivenCurrency: (state, action: PayloadAction<ISelectItem>) =>{
            state.givenCurrency = action.payload;
            state.gettingCurrency = undefined;
        },
        changeGettingCurrency:(state, action: PayloadAction<ISelectItem>) =>{
            state.gettingCurrency = action.payload
        },
    },
})

export const { actions: currensyActions} = currencyLayer

export const { reducer: currensyReducers } = currencyLayer;