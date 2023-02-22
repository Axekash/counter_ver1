import React, {useEffect, useState} from 'react'
import {Counter} from './Counter';


export const Wrapper = () => {

    let [minCount, setMinCount] = useState(0)
    let [maxCount, setMaxCount] = useState(5)
    let [count, setCount] = useState(minCount)
    let [isActive, setIsActive] = useState(false)
    let [editMode, setEditMode] = useState(false)

    useEffect(() => {
            let saveMinValue = localStorage.getItem('minCount')
            let saveMaxValue = localStorage.getItem('maxCount')
            if (saveMinValue && saveMaxValue) {
                setMinCount(JSON.parse(saveMinValue));
                setMaxCount(JSON.parse(saveMaxValue));
                setCount(JSON.parse(saveMinValue));
            }
        },[])

    const setFromLocaleStorage = () => {
        localStorage.setItem('minCount', JSON.stringify(minCount))
        localStorage.setItem('maxCount', JSON.stringify(maxCount))
    }

    return (
        <div className={'tableWrapper'}>
            <Counter
                minCount={minCount}
                maxCount={maxCount}
                count={count}
                changeCount={setCount}
                isActive={isActive}
                setMinCount={setMinCount}
                setMaxCount={setMaxCount}
                setIsActive={setIsActive}
                editMode={editMode}
                setEditMode={setEditMode}
                setFromLocaleStorage={setFromLocaleStorage}
            />
        </div>
    )
}