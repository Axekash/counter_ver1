import React from "react";
import {Button} from "./Button";
import {Table} from "./Table";
import {Setter} from './Setter';

export type CounterType = {
    minCount: number
    maxCount: number
    count: number
    changeCount: (newCount: number) => void
    setMinCount: (value: number) => void
    setMaxCount: (value: number) => void
    setIsActive: (value: boolean) => void
    isActive: boolean
    editMode: boolean
    setEditMode: (val: boolean) => void
    setFromLocaleStorage: () => void
}

export const Counter: React.FC<CounterType> = ({
                                                   minCount,
                                                   maxCount,
                                                   count,
                                                   setMaxCount,
                                                   setMinCount,
                                                   changeCount,
                                                   setEditMode,
                                                   editMode,
                                                   setIsActive,
                                                   isActive,
                                                   setFromLocaleStorage
                                               }) => {

    const increment = () => {
        if (count < maxCount) {
            changeCount(count + 1)
        } else {
            changeCount(count)
        }
    }
    const resetCount = () => {
        changeCount(minCount)
    }
    const editModeHandler = () => {
        setEditMode(!editMode)

    }

    let disabledIncButton = (count === maxCount || minCount > maxCount || minCount === maxCount || maxCount < 0 || isActive)
    let disabledResetButton = (count === minCount || minCount > maxCount || minCount === maxCount || minCount < 0 || isActive)

    return (
        <div className={editMode ? '' : 'wrapper'}>
            <div className={editMode ? '' : "setter"}>
                <Setter
                    minCount={minCount}
                    maxCount={maxCount}
                    setMinCount={setMinCount}
                    setMaxCount={setMaxCount}
                    setCount={changeCount}
                    setIsActive={setIsActive}
                    isActive={isActive}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    setFromLocaleStorage={setFromLocaleStorage}/>
            </div>

            <div className={editMode ? 'setter' : 'wrapperCount'}>
                <Table
                    count={count}
                    minCount={minCount}
                    maxCount={maxCount}
                    isActive={isActive}
                />
                <div className={`buttonsWrapper ${(editMode ? 'setter' : '')} `}>
                    <Button
                        name={'inc'}
                        callback={increment}
                        disabled={disabledIncButton}
                    />
                    <Button
                        name={'reset'}
                        callback={resetCount}
                        disabled={disabledResetButton}
                    />
                    <Button
                        name={'set'}
                        callback={editModeHandler}
                    />
                </div>
            </div>

        </div>
    )
}