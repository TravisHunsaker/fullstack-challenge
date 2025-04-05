import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { IDeal, TDealStatus } from './types';
import styled from 'styled-components';
import { DealSection } from './components/DealSection';
import { Filters } from './components/Filters';

const statusSections = [
	{ label: 'Build Proposal', key: 'build' },
	{ label: 'Pitch Proposal', key: 'pitch' },
	{ label: 'Negotiation', key: 'negotiation' }
];

function App() {
	const [deals, setDeals] = useState<IDeal[]>([]);
	const [status, setStatus] = useState<TDealStatus | ''>('');
	const [year, setYear] = useState<string | ''>('');

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

	const dealsByStatus = useMemo(() => {
		return deals.reduce<Record<string, IDeal[]>>((acc, deal) => {
			if (!acc[deal.status]) acc[deal.status] = [];
			acc[deal.status].push(deal);
			return acc;
		}, {});
	}, [deals]);

	const handeStatusChange = (state: TDealStatus | '') => setStatus(state);
	const handeYearChange = (value: string | '') => setYear(value);

	return (
		<Container>
			<Title>Deals</Title>
			<Filters
				status={status}
				year={year}
				onStatusChange={handeStatusChange}
				onYearChange={handeYearChange}
			/>
			<Sections>
				{statusSections.map(({ label, key }) => (
					<DealSection
						key={key}
						label={label}
						deals={dealsByStatus[key] || []}
					/>
				))}
			</Sections>
		</Container>
	);
}

export default App;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 48px;
`;

const Title = styled.div`
	font-size: 42px;
	font-weight: bold;
`;

const Sections = styled.div`
	display: flex;
	gap: 15px;
`;
