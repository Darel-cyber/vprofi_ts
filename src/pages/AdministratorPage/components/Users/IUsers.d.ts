import { IUser } from '../../../../store/types/user';
import { IAdminAd } from '../../../../store/types/admin';

export interface IUsers {
	users: IUser[];
	usersLoader: boolean;
	adsLoader: boolean;
	ads: IAdminAd[];
	getUsers(): void;
	getAdsSaga(userId: number): void;
}

export interface ICurrentUser {
	id: number;
	name: string;
}
