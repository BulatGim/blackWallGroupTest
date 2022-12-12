import {FC, memo} from 'react';
import styles from "./Direction.module.scss"

interface IDirectionProps {
    className?: string;
    isActive: boolean
    text: string;
    onClick?: ()=>void;
}

export const Direction:FC<IDirectionProps> = memo((props) => {

    const {
        isActive,
        text,
        onClick
    } = props

    return (
        <p className={isActive? (styles.Direction + " "+styles.isActive): styles.Direction } onClick={onClick}>
            {text}
        </p>
    );
});
