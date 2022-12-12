import {FC, memo, useCallback, useState} from 'react';
import styles from "./Selector.module.scss"
import {classNames} from "../../helpers/classNames/classNames";
import {CurrencyMethod, ISelectItem} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {currensyActions} from "../../store/currencyLayer"
import {getCurrency} from "../../store/selectors/getCurrency";
import {IStore} from "../../types/storeTypes";

interface ISelectorProps {
    className?: string;
    selecting?: ISelectItem[];
    type: CurrencyMethod;
}

export const Selector:FC<ISelectorProps> = memo(({className, selecting, type}) => {

    const {
        changeGettingCurrency,
        changeGivenCurrency
    }=currensyActions

    const dispatch = useDispatch()

    const currency = useSelector((state: IStore)=> getCurrency(state, type))

    const [isSelectActive, setIsSelectActive] = useState<boolean>(false)

    const selectCurrency = useCallback((currency:ISelectItem)=>{
        if (type==='giving'){
            dispatch(changeGivenCurrency(currency))
        }else{
            dispatch(changeGettingCurrency(currency))
        }
        setIsSelectActive(false);
    }, [dispatch, type, changeGivenCurrency, changeGettingCurrency])

    return (
        <div className={classNames(styles.Selector, )}>
            <p
                onClick={()=>setIsSelectActive(prevState => !prevState)}
                className={styles.selected}
            >
                {currency?.name}
            </p>
            <div className={styles.selection}>
                {isSelectActive && selecting?.map((item)=>
                    <div key={item.code} className={styles.selecting} onClick={()=>selectCurrency(item)}>
                        {item.name}
                    </div>
                )}
            </div>
        </div>
    );
});
