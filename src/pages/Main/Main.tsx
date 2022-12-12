import React from 'react';
import {CurrencyExchange} from "../../organisms/CurrencyExchange/CurrencyExchange";

const Main = () => {
    return (
        <>
            <CurrencyExchange title={'Отдаете'} type={"giving"} />
            <CurrencyExchange title={'Получаете'} type={"getting"}/>
        </>
    );
};

export default Main;