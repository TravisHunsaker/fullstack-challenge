import { TextField } from '@mui/material';
import { TDealStatus } from '../types';

import styled from 'styled-components';
import { MuiSelect } from './MuiSelect';

type Props = {
	status: TDealStatus | '';
	year: string | '';
	onStatusChange: (state: TDealStatus | '') => void;
	onYearChange: (value: string | '') => void;
};

export const Filters: React.FC<Props> = ({
	status,
	year,
	onStatusChange,
	onYearChange
}) => {
	return (
		<Container>
			<MuiSelect
				label="Status"
				onChange={onStatusChange}
				value={status}
			/>
			<TextField
				id="filled-basic"
				label="Year"
				variant="filled"
				value={year}
				onChange={(e) => onYearChange(e.target.value)}
				autoComplete="off"
			/>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	gap: 15px;
`;
