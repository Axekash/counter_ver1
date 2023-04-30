

const initialState = {
	minCount: 0,
	maxCount: 5,
	count: 0
}

export const counterReducer = (state: InitialStateTypes = initialState, action: AllActionsCounterType) => {
	switch (action.type) {
		case 'SET-MIN-COUNT': {
			return {...state, minCount: action.payload.minCount}
		}
		case "SET-MAX-COUNT": {
			return {...state, maxCount: action.payload.maxCount}
		}
		case "SET-COUNT": {
			return {...state, count: action.payload.count}
		}
		default: return state
	}
}

//actionCreators

export const setMinCountAC = (minCount: number) => {
	return {
		type: 'SET-MIN-COUNT',
		payload: {
			minCount
		}
	} as const
}

export const setMaxCountAC = (maxCount: number) => {
	return {
		type: 'SET-MAX-COUNT',
		payload: {
			maxCount
		}
	} as const
}

export const setCountAC = (count: number) => {
	return {
		type: 'SET-COUNT',
		payload: {
			count
		}
	} as const
}

//types

export type AllActionsCounterType = SetMinCountType | SetMaxCountType | SetCountType

export type SetMinCountType = ReturnType<typeof setMinCountAC>
export type SetMaxCountType = ReturnType<typeof setMaxCountAC>
export type SetCountType = ReturnType<typeof setCountAC>

export type InitialStateTypes = typeof initialState


