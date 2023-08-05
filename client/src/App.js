
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
	
	const [data, setData] = useState('')

	axios.get('http://localhost:5000/about').then(response => setData(response.data))

	return (
		<div>
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
		</div>
	);
}

export default App;
