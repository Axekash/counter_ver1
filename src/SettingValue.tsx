import React, {ChangeEvent} from "react";
import {ChangeInputValue} from "./ChangeInputValue";
import {useDispatch} from "react-redux";
import {setMaxCountAC, setMinCountAC} from "./store/count-reducer";
import {setIsActiveModeAC} from "./store/mode-reducer";

type SettingValueType = {
    minInputCount: number
    maxInputCount: number
}

export const SettingValue: React.FC<SettingValueType> = (props) => {
    const dispatch = useDispatch()

    const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinCountAC(Number(e.currentTarget.value)))
        dispatch(setIsActiveModeAC(true))
    }
    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxCountAC(Number(e.currentTarget.value)))
        dispatch(setIsActiveModeAC(true))
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