import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Counter} from "./Counter";

function App() {


	return (
		<div className="App">
			<Provider store={store}>
				<div className={'tableWrapper'}>
					<Counter/>
				</div>
			</Provider>
		</div>
	);
}

export default App;
