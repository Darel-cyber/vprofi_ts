export type IRubricReducer = Readonly<{
	directions: IDirection[];
	specialties: ISpecialty[];
	specializations: ISpecialization[];
}>;

export interface IDirection {
	id: number;
	type: string;
	name: string;
	haveChild: boolean;
}

export interface ISpecialty {
	id: number;
	direction_id: number;
	name: string;
	haveChild: true;
}

export interface ISpecialization {
	id: number;
	specialty_id: number;
	direction_id: number;
	name: string;
	haveChild: false;
}
