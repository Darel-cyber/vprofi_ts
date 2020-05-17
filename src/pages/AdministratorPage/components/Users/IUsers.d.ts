import { IUser } from '../../../../store/types/user';

export interface IUsers {
	users: IUser[];
	loader: boolean;
	getUsers(): void;
}
