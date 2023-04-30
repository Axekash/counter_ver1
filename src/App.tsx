import React from 'react';
import './App.css';
import {Wrapper} from './Wrapper';
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {


	return (
		<div className="App">
			<Provider store={store}>
				<Wrapper/>
			</Provider>
		</div>
	);
}

export default App;
