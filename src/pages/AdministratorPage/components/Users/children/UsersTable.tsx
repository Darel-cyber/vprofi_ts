import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { IUser } from '../../../../../store/types/user';
import { ICurrentUser } from '../IUsers';
import { ITableConfig, ITableTitles } from '../../../../../components/common/CustomTable/CustomTable';
import TableWithPagination from '../../../../../components/common/CustomTable/TableWithPagination';

const useStyles = makeStyles(theme => ({
	root: {},
	content: {
		padding: 0
	},
	inner: {
		minWidth: 1050
	},
	nameContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	avatar: {
		marginRight: theme.spacing(2)
	},
	actions: {
		justifyContent: 'flex-end'
	}
}));

interface IUsersTable {
	users: IUser[];
	showAd: () => void;
	setCurrentUser: (user: ICurrentUser) => void;
	setSelectedUserItems: (items: number[]) => void;
}

const UsersTable = ({ users, showAd, setCurrentUser, setSelectedUserItems }: IUsersTable) => {
	// такая структура для настройки с сервера

	// имена для колонок
	const tableTitles: ITableTitles = {
		checkboxAll: 'checkbox',
		name: 'Имя',
		email: 'Электронная почта',
		address: 'Локация',
		phone: 'Телефон',
		createdAt: 'Дата регистрации'
	};

	// типы заголовков
	const headerConfig: ITableConfig = {
		checkboxAll: 'checkboxAll',
		name: 'default',
		email: 'default',
		address: 'default',
		phone: 'default',
		createdAt: 'default'
	};

	// типы ячеек с данными
	const dataConfig: ITableConfig = {
		checkbox: 'checkbox',
		name: 'withAvatar',
		email: 'default',
		address: 'default',
		phone: 'default',
		createdAt: 'date'
	};

	const data = users.map((user: IUser) => ({ ...user, address: Object.values(user.address).toString() }));

	return (
		<TableWithPagination
			allTableData={data}
			dataConfig={dataConfig}
			headerConfig={headerConfig}
			isHover
			onRowClick={({ id: number, name: name }) => {
				setCurrentUser({ id: number, name: name });
				showAd();
			}}
			setGlobalSelectedItems={setSelectedUserItems}
			tableTitles={tableTitles}
		/>
	);
};

export default UsersTable;
