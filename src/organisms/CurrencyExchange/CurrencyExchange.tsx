import {FC} from 'react';
import styles from "./CurrencyExchange.module.scss"
import {classNames} from "../../helpers/classNames/classNames";
import {Directions} from "../../molecules/directions/Directions";
import {CurrencyExchangeForm} from "../../molecules/CurrencyExchangeForm/CurrencyExchangeForm";
import {currensyActions} from "../../store/currencyLayer";
import {CurrencyMethod} from "../../types/types";

interface ICurrencyExchangeProps {
    className?: string;
    title: string;
    type: CurrencyMethod
}

export const CurrencyExchange:FC<ICurrencyExchangeProps> = (props) => {
    const {
        title,
        type,
    } = props

    const {changeMainGettingDirection, changeMainGivingDirection} = currensyActions

    return (
        <div className={classNames(styles.CurrencyExchange, )}>
            <h3 className={styles.title}>{title}</h3>
            <Directions changeMainDirection={type==='giving'?changeMainGivingDirection:changeMainGettingDirection} type={type}/>
            <CurrencyExchangeForm type={type}/>
        </div>
    );
};
