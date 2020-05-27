import React, { useEffect, useState } from 'react';
import style from './ads.module.scss';
import {
	Card,
	CardActions,
	CardContent,
	Checkbox,
	CircularProgress,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow
} from '@material-ui/core';
import { IAdminAd } from '../../../../store/types/admin';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AdsToolbar from './AdsToolbar';
import { ICurrentUser } from '../Users/IUsers';
import { ITableConfig, ITableTitles } from '../../../../components/common/CustomTable/CustomTable';
import TableWithPagination from '../../../../components/common/CustomTable/TableWithPagination';

const useStyles = makeStyles(theme => ({
	root: {},
	content: {
		padding: 0
	},
	inner: {
		minWidth: 1050
	},
	description: {
		width: 400
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

interface IAds {
	getAdsSaga(userId: number): void;
	ads: IAdminAd[];
	user: ICurrentUser;
	loader: boolean;
}

// имена для колонок
const tableTitles: ITableTitles = {
	checkboxAll: 'чекбокс',
	direction: 'Направление',
	specialty: 'Специальность',
	specialization: 'Специализация',
	description: 'Описание',
	dateTimeCreated: 'Дата создания',
	isActive: 'Объявление активно',
	isDeleted: 'Объявление удалено',
	dateTimeDeleted: 'Дата удаления'
};

// типы заголовков
const headerConfig: ITableConfig = {
	checkboxAll: 'checkboxAll',
	direction: 'default',
	specialty: 'default',
	specialization: 'default',
	description: 'default',
	dateTimeCreated: 'default',
	isActive: 'default',
	isDeleted: 'default',
	dateTimeDeleted: 'default'
};

// типы ячеек с данными
const dataConfig: ITableConfig = {
	checkbox: 'checkbox',
	direction: 'default',
	specialty: 'default',
	specialization: 'default',
	description: 'default',
	dateTimeCreated: 'date',
	isActive: 'isActive',
	isDeleted: 'isDeleted',
	dateTimeDeleted: 'date'
};

const Ads = ({ getAdsSaga, user, loader, ads }: IAds) => {
	const classes = useStyles();

	useEffect(() => {
		if (user.id >= 0) getAdsSaga(user.id);
	}, []);

	const [selectedAd, setSelectedAd] = useState<number[]>([]);

	return (
		<div className={style.adsModal}>
			{loader && (
				<div className={style.loader}>
					<CircularProgress color="inherit" />
				</div>
			)}
			<div className={style.root}>
				<AdsToolbar label={`Объявления пользователя ${user.name}`} />
				<TableWithPagination
					allTableData={ads}
					dataConfig={dataConfig}
					headerConfig={headerConfig}
					isHover
					setGlobalSelectedItems={setSelectedAd}
					tableTitles={tableTitles}
				/>
				{/*<Table>
					<TableHead>
						<TableRow>
							<TableCell padding="checkbox">
								<Checkbox
									checked={selectedAds.length === ads.length}
									color="primary"
									indeterminate={selectedAds.length > 0 && selectedAds.length < ads.length}
									onChange={handleSelectAll}
								/>
							</TableCell>
							<TableCell>ID</TableCell>
							<TableCell>Направление</TableCell>
							<TableCell>Специальность</TableCell>
							<TableCell>Специализация</TableCell>
							<TableCell>Описание</TableCell>
							<TableCell>Дата создания</TableCell>
							<TableCell>Объявление активно</TableCell>
							<TableCell>Объявление удалено</TableCell>
							<TableCell>Дата удаления</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ads.slice(0, rowsPerPage).map(ad => (
							<TableRow hover key={ad.id} selected={selectedAds.indexOf(ad.id) !== -1}>
								<TableCell padding="checkbox">
									<Checkbox
										checked={selectedAds.indexOf(ad.id) !== -1}
										color="primary"
										onClick={event => handleSelectOne(event, ad.id)}
										value="true"
									/>
								</TableCell>
								<TableCell>{ad.id}</TableCell>
								<TableCell>{ad.direction}</TableCell>
								<TableCell>{ad.specialty}</TableCell>
								<TableCell>{ad.specialization}</TableCell>
								<TableCell>
									<div className={classes.description}>{ad.description}</div>
								</TableCell>
								<TableCell>{new Date(ad.dateTimeCreated).toLocaleDateString()}</TableCell>
								<TableCell>{ad.isActive && 'активен'}</TableCell>
								<TableCell>{ad.isDeleted && 'удален'}</TableCell>
								<TableCell>{ad.dateTimeDeleted && new Date(ad.dateTimeDeleted).toLocaleDateString()}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>*/}
			</div>
		</div>
	);
};

export default Ads;
