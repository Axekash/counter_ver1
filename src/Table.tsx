import React from "react";

type TableType = {
    count: number
    minCount: number
    maxCount: number
    isActive: boolean
}
export const Table: React.FC<TableType> = (props) => {

    return (

        <div className={`table ${ (props.maxCount < 0 || props.count === props.maxCount || props.minCount < 0) ? "finishTable" : ''}`}>
            {props.minCount < 0 || props.maxCount < 0 ? <span>Incorrect value!</span> : props.minCount === props.maxCount ? <span> Incorrect value! </span> : props.minCount > props.maxCount ? <span>Error! Enter new values!</span> : props.isActive ? <span>Enter values and press 'set'</span> : props.count }
        </div>
    )
}
