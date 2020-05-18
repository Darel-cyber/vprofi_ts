import { IUser } from './user';

export interface IAdminAd {
	id: number;
	direction: string;
	direction_id: number;
	specialty: string;
	specialty_id: number;
	specialization: string;
	specialization_id: number;
	description: string;
	dateTimeCreated: number;
	isActive: boolean;
	isDeleted: boolean;
	dateTimeDeleted?: number;
}

export type IAdminReducer = Readonly<{
	usersLoader: boolean;
	adsLoader: boolean;
	users: IUser[];
	ads: IAdminAd[];
}>;
