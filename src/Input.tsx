import React, { ChangeEvent } from 'react'

type inputPropsType = {
    type?: string
    value: number
    callback: (value: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const Input: React.FC<inputPropsType> = (props) => {
    //
    // const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    //     props.callback(ev.currentTarget.value)
    // }

    return (<input 
        type={'number'} 
        value={props.value} 
        onChange={ props.callback}
        className={props.className}
        />  
    )
}