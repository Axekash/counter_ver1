import React, {ChangeEvent} from "react";
import {Input} from "./Input";

type ChangeInputValueType = {
    value: number
    minInputCount: number
    maxInputCount: number
    onChangeHandler: (value: ChangeEvent<HTMLInputElement>) => void
}
export const ChangeInputValue: React.FC<ChangeInputValueType> = (props) => {

    let changedInputClassName = (props.minInputCount > props.maxInputCount || props.minInputCount === props.maxInputCount || props.minInputCount < 0 || props.maxInputCount < 0) ?
        'inputError' : 'input'
    return (
        <div className={'inputValue'}>
            <div className="inputValue_title">
                Start value:
            </div>
            <Input
                type={'number'}
                value={props.value}
                callback={props.onChangeHandler}
                className={changedInputClassName}
            />
        </div>
    )
}
