import { IUser } from './user';

export type IAdminReducer = Readonly<{
	loader: boolean;
	users: IUser[];
}>;
