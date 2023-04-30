import React  from "react";
import { Button } from "./Button";
import { SettingValue } from "./SettingValue";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {setMinCountAC} from "./store/count-reducer";
import {setEditModeAC, setIsActiveModeAC} from "./store/mode-reducer";


type SetterType = {}

export const Setter: React.FC<SetterType> = () => {

    const minCount = useSelector<AppRootStateType, number>(state => state.counter.minCount)
    const maxCount = useSelector<AppRootStateType, number>(state => state.counter.maxCount)
    const editMode = useSelector<AppRootStateType, boolean>(state=> state.mode.editMode)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(setMinCountAC(minCount))
        dispatch(setIsActiveModeAC(false))
        dispatch(setEditModeAC(!editMode))
    }
    let disabledButton = (minCount === maxCount || minCount > maxCount || minCount < 0 || maxCount < 0)

    return (
        <div className={'wrapper'}>
            <SettingValue
                minInputCount={minCount}
                maxInputCount={maxCount}
            />
            <div className='buttonsWrapper'>
                <Button
                    name={'set'}
                    callback={onClickHandler}
                    disabled={disabledButton}
                />
            </div>
        </div>
    )
}