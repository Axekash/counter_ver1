import React, {useEffect, useState} from 'react'
import {Counter} from './Counter';


export const Wrapper = () => {


    useEffect(() => {

        },[])

    // const setFromLocaleStorage = () => {
    //     localStorage.setItem('minCount', JSON.stringify(minCount))
    //     localStorage.setItem('maxCount', JSON.stringify(maxCount))
    // }

    return (
        <div className={'tableWrapper'}>
            <Counter/>
        </div>
    )
}