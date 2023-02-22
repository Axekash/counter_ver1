import React  from "react";
import { Button } from "./Button";
import { SettingValue } from "./SettingValue";


type SetterType = {
    minCount: number
    maxCount: number
    setMinCount: (count: number) => void
    setMaxCount: (count: number) => void
    setCount: (minCount: number) => void
    setIsActive: (values: boolean) => void
    isActive: boolean
    editMode: boolean
    setEditMode: (val: boolean) => void
    setFromLocaleStorage: () => void
}

export const Setter: React.FC<SetterType> = ({minCount, setCount, setMinCount, setMaxCount, maxCount, setIsActive, isActive, setEditMode, editMode, setFromLocaleStorage}) => {

    const onClickHandler = () => {
        setCount(minCount)
        setIsActive(false)
        setEditMode(!editMode)
        setFromLocaleStorage()
    }
    let disabledButton = (minCount === maxCount || minCount > maxCount || minCount < 0 || maxCount < 0)

    return (
        <div className={'wrapper'}>
            <SettingValue
                setMinCount={setMinCount}
                setMaxCount={setMaxCount}
                setIsActive={setIsActive}
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