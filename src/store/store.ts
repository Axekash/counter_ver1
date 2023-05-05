import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./count-reducer";
import {modeReducer} from "./mode-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {loadStorage, saveState} from "../utils/localStorage";

const rootReducer = combineReducers({
	counter: counterReducer,
	mode: modeReducer
})

export const store = legacy_createStore(rootReducer, loadStorage(), applyMiddleware(thunk))


store.subscribe(() => {
	saveState( {
		counter: store.getState().counter,
		mode: store.getState().mode
	})
})

//types
type AppStoreType = typeof store
export type AppRootStateType = ReturnType<typeof rootReducer>


export type AppThunkDispatch = ThunkDispatch<AppStoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//@ts-ignore
window.store = store
