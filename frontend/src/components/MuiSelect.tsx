import React from 'react';
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import { TDealStatus, TStatusItem } from '../types';

type Props = {
	value: TDealStatus | '';
	label: string;
	onChange: (state: TDealStatus | '') => void;
};

const statusItems: TStatusItem[] = [
	{
		value: '',
		name: 'All'
	},
	{
		value: 'build',
		name: 'Build'
	},
	{
		value: 'pitch',
		name: 'Pitch'
	},
	{
		value: 'negotiation',
		name: 'Negotiation'
	}
];

export const MuiSelect: React.FC<Props> = ({ value, label, onChange }) => {
	return (
		<FormControl variant="filled" style={{ width: 120 }}>
			<InputLabel id="demo-simple-select-label">{label}</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={value}
				onChange={(e) => onChange(e.target.value as TDealStatus | '')}
			>
				{statusItems.map((item) => (
					<MenuItem key={item.value} value={item.value}>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
