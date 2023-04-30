import React from "react";
import {Button} from "./Button";
import {Table} from "./Table";
import {Setter} from './Setter';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {setCountAC, setMinCountAC} from "./store/count-reducer";
import App from "./App";
import {setEditModeAC} from "./store/mode-reducer";

export type CounterType = {

}

export const Counter: React.FC<CounterType> = () => {

	const minCount = useSelector<AppRootStateType, number>(state => state.counter.minCount)
	const maxCount = useSelector<AppRootStateType, number>(state => state.counter.maxCount)
	const count = useSelector<AppRootStateType, number>(state => state.counter.count)
	const editMode = useSelector<AppRootStateType, boolean>(state=> state.mode.editMode)
	const isActive = useSelector<AppRootStateType, boolean>(state => state.mode.isActive)
	const dispatch = useDispatch()


	const increment = () => {
		if (count < maxCount) {
			dispatch(setCountAC(count + 1))
		} else {
			dispatch(setCountAC(count))
		}
	}

	const resetCount = () => {
		dispatch(setCountAC(minCount))
	}

	const editModeHandler = () => {
		dispatch(setEditModeAC(!editMode))
	}

	let disabledIncButton = (count === maxCount || minCount > maxCount || minCount === maxCount || maxCount < 0 || isActive)
	let disabledResetButton = (count === minCount || minCount > maxCount || minCount === maxCount || minCount < 0 || isActive)

	return (
		<div className={editMode ? '' : 'wrapper'}>
			<div className={editMode ? '' : "setter"}>
				<Setter />
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