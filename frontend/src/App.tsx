import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
	const [deals, setDeals] = useState([]);
	const [status, setStatus] = useState('');
	const [year, setYear] = useState('');

	console.log(deals);

	useEffect(() => {
		handleGetDeals();
	}, [status, year]);

	const handleGetDeals = async () => {
		try {
			const { data } = await axios.get(`/api/organizations/1/deals`, {
				params: {
					status,
					year
				}
			});
			if (data.deals) {
				setDeals(data.deals);
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<div>
			<h1>🎉 Welcome to the Fullstack Challenge! 🎉</h1>
			<p>
				Replace the content here with your own code and organize files
				as you see fit
			</p>
			<h2>Rules</h2>
			<ul>
				<li>Spend no more than 4 hours working on the challenge</li>
				<li>Make use of any libraries and tools that you like </li>
				<li>
					Feel free to use help from LLMs but be prepared to explain
					your code and the choices you made
				</li>
				<li>Commit as you go. We want to see your thought process</li>
			</ul>
			<p>Good luck!</p>
		</div>
	);
}

export default App;
