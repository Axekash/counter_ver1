import React, {useEffect, useState} from 'react'
import {Counter} from './Counter';
import {useDispatch} from "react-redux";
import {setCountsTC, setMaxCountAC, setMinCountAC} from "./store/count-reducer";


export const Wrapper = () => {
	const dispatch = useDispatch()



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