import {FC, memo, useState} from 'react';
import styles from "./CurrencyExchangeForm.module.scss"
import {classNames} from "../../helpers/classNames/classNames";
import {FormInput} from "../../atoms/formInput/FormInput";
import {Selector} from "../../atoms/selector/Selector";
import {useSelector} from "react-redux";
import {getAllGivingCurrencies} from "../../store/selectors/getAllGivingCurrencies";
import {getAllGettingCurrencies} from "../../store/selectors/getAllGettingCurrencies";
import {CurrencyMethod} from "../../types/types";

interface ICurrencyExchangeFormProps {
    className?: string,
    type: CurrencyMethod
}

export const CurrencyExchangeForm:FC<ICurrencyExchangeFormProps> = memo(({className, type}) => {

    const arr = useSelector(type ==='getting'?getAllGettingCurrencies:getAllGivingCurrencies)

    const [inputValue, setInputValue] = useState('')

    return (
        <div className={classNames(styles.CurrencyExchangeForm, )}>
            <FormInput value={inputValue} onChange={setInputValue}/>
            <Selector selecting={arr} type={type}/>
        </div>
    );
});
