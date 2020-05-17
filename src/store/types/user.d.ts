export interface IUser {
	id: number;
	name: string;
	address: IAddress;
	email: string;
	phone: string;
	avatarUrl: string;
	createdAt: number;
}

interface IAddress {
	country: string;
	state: string;
	city: string;
	street: string;
}
