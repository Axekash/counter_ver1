import React from "react";
import {Button} from "./Button";
import {Table} from "./Table";
import {Setter} from './Setter';
import {useAppDispatch, useAppSelector} from "./store/store";
import {setCountAC} from "./store/count-reducer";
import {setEditModeAC} from "./store/mode-reducer";

export type CounterType = {}

export const Counter: React.FC<CounterType> = () => {

	const minCount = useAppSelector<number>(state => state.counter.minCount)
	const maxCount = useAppSelector<number>(state => state.counter.maxCount)
	const count = useAppSelector<number>(state => state.counter.count)
	const editMode = useAppSelector<boolean>(state => state.mode.editMode)
	const isActive = useAppSelector<boolean>(state => state.mode.isActive)
	const dispatch = useAppDispatch()

	const increment = () => {
		if (!(count < maxCount)) return
		dispatch(setCountAC(count + 1))
	}

	const resetCount = () => {
		dispatch(setCountAC(minCount))
	}

	const editModeHandler = () => {
		dispatch(setEditModeAC(!editMode))
	}

	let disabledIncButton = (count === maxCount
		|| minCount > maxCount
		|| minCount === maxCount
		|| maxCount < 0
		|| isActive)
	let disabledResetButton = (count === minCount
		|| minCount > maxCount
		|| minCount === maxCount
		|| minCount < 0
		|| isActive)

	return (
		<div className={editMode ? '' : 'wrapper'}>
			{editMode
				? <div className={editMode ? '' : "setter"}>
					<Setter/>
				</div>
				: <div className={editMode ? 'setter' : 'wrapperCount'}>
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
				</div>}
		</div>
	)
}