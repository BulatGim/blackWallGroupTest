import {ChangeEvent, FC, InputHTMLAttributes, memo, useCallback} from 'react';
import styles from "./FormInput.module.scss"
import {classNames} from "../../helpers/classNames/classNames";

type HTMLInputAttr = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IFormInputProps extends HTMLInputAttr{
    className?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string)=>void;
}

export const FormInput:FC<IFormInputProps> = memo((props) => {
    let {
        className = '',
        onChange,
        value,
        placeholder
    } = props;

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);


    return (
        <input
            className={classNames(styles.FormInput, {}, [className])}
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value}
        />
    );
});
