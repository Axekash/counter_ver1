import React from 'react'

type ButtonType = {
    name: string
    callback: () => void
    disabled?: boolean
}
export const Button: React.FC<ButtonType> = (props) => {

    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button className={'button'} onClick={onClickHandler} disabled={props.disabled}>
                {props.name}
            </button>
        </div>
    )
}