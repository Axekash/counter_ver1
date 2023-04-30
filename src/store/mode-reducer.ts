const initialState = {
	isActive: false,
	editMode: false
}

export type InitialStateType = typeof initialState


export const modeReducer = (state: InitialStateType = initialState, action: ModeReducersType) => {
	switch (action.type) {
		case 'SET-IS-ACTIVE-MODE': {
			return {...state, isActive: action.payload.isActive}
		}
		case "SET-EDIT-MODE": {
			return {...state, editMode: action.payload.editMode}
		}
		default:
			return state
	}
}


//actions

export const setIsActiveModeAC = (isActive: boolean) => {
	return {
		type: 'SET-IS-ACTIVE-MODE',
		payload: {
			isActive
		}
	} as const
}

export const setEditModeAC = (editMode: boolean) => {
	return {
		type: 'SET-EDIT-MODE',
		payload: {
			editMode
		}
	} as const
}

//types

export type ModeReducersType = SetIsActiveACType | SetEditModeACType

export type SetIsActiveACType = ReturnType<typeof setIsActiveModeAC>
export type SetEditModeACType = ReturnType<typeof setEditModeAC>