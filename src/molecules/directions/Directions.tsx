import {FC, memo, useCallback} from 'react';
import styles from "./Directions.module.scss"
import {classNames} from "../../helpers/classNames/classNames";
import {Direction} from "../../atoms/direction/Direction";
import {useDispatch, useSelector} from "react-redux";
import {getActiveDirection} from "../../store/selectors/getActiveDirection";
import {AnyAction} from "@reduxjs/toolkit";
import {IStore} from "../../types/storeTypes";
import {getAllDirections} from "../../store/selectors/getAllDirections";
import {CurrencyMethod} from "../../types/types";

interface IDirectionsProps {
    className?: string
    changeMainDirection: (str: string)=>AnyAction
    type: CurrencyMethod;
}

export const Directions:FC<IDirectionsProps> = memo(({className, changeMainDirection, type}) => {

    const dispatch = useDispatch()

    const directions = useSelector((state: IStore)=>getAllDirections(state, type))

    const activeDirection = useSelector((state: IStore)=>getActiveDirection(state, type))

    const changeDirection = useCallback((codes:string)=>{
        dispatch(changeMainDirection(codes))
    }, [dispatch, changeMainDirection])

    return (
        <div className={classNames(styles.Directions, )}>
            {directions.map(item =>
                <Direction
                    key={item.codes}
                    isActive={activeDirection?.name === item.name}
                    text={item.name}
                    onClick={()=>changeDirection(item.codes)}
                />
            )}
        </div>
    );
});
