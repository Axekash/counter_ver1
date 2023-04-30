import React from 'react';
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./count-reducer";
import {modeReducer} from "./mode-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
	counter: counterReducer,
	mode: modeReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

//types
type AppStoreType = typeof store
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppStoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()

//@ts-ignore
window.store = store
