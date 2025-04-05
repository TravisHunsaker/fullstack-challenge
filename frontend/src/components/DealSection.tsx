import React from 'react';
import { IDeal } from '../types';
import styled from 'styled-components';

type Props = {
	label: string;
	deals: IDeal[];
};

export const DealSection: React.FC<Props> = ({ label, deals }) => {
	const totalValue = deals.reduce((sum, deal) => sum + deal.value, 0);

	const formatCurrency = (value: number) =>
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		}).format(value);

	return (
		<Container>
			<Section>
				{label}
				<Row>
					<div>Total:</div>
					<div>{formatCurrency(totalValue)}</div>
				</Row>
			</Section>
			{deals.map((deal) => (
				<Deal key={deal.id}>
					<div>{deal.accountName}</div>
					<div>{formatCurrency(deal.value)}</div>
				</Deal>
			))}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 25px;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Section = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: grey;
	color: white;
	padding: 16px;
	border-radius: 10px;
`;

const Deal = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	color: black;
	padding: 16px;
	border-radius: 10px;
	border: 2px solid lightgrey;
`;
