import React from 'react';
import {combineReducers, createStore, legacy_createStore} from "redux";
import {counterReducer} from "./count-reducer";
import {modeReducer} from "./mode-reducer";

const rootReducer = combineReducers({
	counter: counterReducer,
	mode: modeReducer
})

export const store = legacy_createStore(rootReducer)

//types
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
