export type TDealStatus = 'build' | 'pitch' | 'negotiation';

export interface IOrganization {
	id: number;
	name: string;
	created: Date;
	updated: Date;
}

export interface IAccount {
	id: number;
	organization_id: number;
	name: string;
	created: Date;
	updated: Date;
}

export interface IDeal {
	id: number;
	account_id: number;
	accountName: string;
	value: number;
	status: TDealStatus;
	created_at: Date;
	updated_at: Date;
}
