import './App.css';

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

	let [data, setData] = useState('')
	axios.get('http://localhost:5000/about').then(res => setData(res.data))

	return (
		<div className="App">

			<h1 className='text-blue-500 text-5xl'>Hi</h1>
			<h1 className='text-red-500 text-xl'>{data}</h1>

		</div>
	);
}

export default App;