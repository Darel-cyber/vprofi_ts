export type IAppReducer = Readonly<{
	isInitialized: boolean;
	message: string;
	globalLoader: boolean;
}>;
