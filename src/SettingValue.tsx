import React, {ChangeEvent} from "react";
import {ChangeInputValue} from "./ChangeInputValue";

type SettingValueType = {
    setMinCount: (count: number) => void
    setMaxCount: (count: number) => void
    setIsActive: (values: boolean) => void
    minInputCount: number
    maxInputCount: number
}

export const SettingValue: React.FC<SettingValueType> = (props) => {

    const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinCount(Number(e.currentTarget.value))
        props.setIsActive(true)
    }
    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxCount(Number(e.currentTarget.value))
        props.setIsActive(true)
    }

    return (
        <div className="table settingTable">
            <ChangeInputValue
                value={props.minInputCount}
                minInputCount={props.minInputCount}
                maxInputCount={props.maxInputCount}
                onChangeHandler={onChangeMinInputHandler}
            />
            <ChangeInputValue
                value={props.maxInputCount}
                minInputCount={props.minInputCount}
                maxInputCount={props.maxInputCount}
                onChangeHandler={onChangeMaxInputHandler}
            />
        </div>
    )
}