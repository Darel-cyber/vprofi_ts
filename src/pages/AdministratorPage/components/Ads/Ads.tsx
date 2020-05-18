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
import {ICurrentUser} from "../Users/IUsers";

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

const Ads = ({ getAdsSaga, user, loader, ads }: IAds) => {
	const classes = useStyles();

	useEffect(() => {
		if (user.id >= 0) getAdsSaga(user.id);
	}, []);

	const [selectedAds, setSelectedAds] = useState<number[]>([]);
	const [rowsPerPage, setRowsPerPage] = useState<number>(10);
	const [page, setPage] = useState<number>(0);

	const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
		let selectedAds: number[];

		if (event.target.checked) {
			selectedAds = ads.map((ad: IAdminAd) => ad.id);
		} else {
			selectedAds = [];
		}

		setSelectedAds(selectedAds);
	};

	const handleSelectOne = (event: any, id: number) => {
		// event.preventDefault();
		event.stopPropagation();

		const selectedIndex = selectedAds.indexOf(id);
		let newSelectedAds: number[] = [];

		if (selectedIndex === -1) {
			newSelectedAds = newSelectedAds.concat(selectedAds, id);
		} else if (selectedIndex === 0) {
			newSelectedAds = newSelectedAds.concat(selectedAds.slice(1));
		} else if (selectedIndex === selectedAds.length - 1) {
			newSelectedAds = newSelectedAds.concat(selectedAds.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelectedAds = newSelectedAds.concat(selectedAds.slice(0, selectedIndex), selectedAds.slice(selectedIndex + 1));
		}

		setSelectedAds(newSelectedAds);
	};

	const handlePageChange = (event: unknown, page: number) => {
		setPage(page);
	};

	const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
	};

	return (
		<div className={style.adsModal}>
			{loader && (
				<div className={style.loader}>
					<CircularProgress color="inherit" />
				</div>
			)}
			<div className={style.root}>
				<AdsToolbar label={`Объявления пользователя ${user.name}`} />
				<Card className={classes.root}>
					<CardContent className={classes.content}>
						<PerfectScrollbar>
							<div className={classes.inner}>
								<Table>
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
								</Table>
							</div>
						</PerfectScrollbar>
					</CardContent>
					<CardActions className={classes.actions}>
						<TablePagination
							component="div"
							count={ads.length}
							onChangePage={handlePageChange}
							onChangeRowsPerPage={handleRowsPerPageChange}
							page={page}
							rowsPerPage={rowsPerPage}
							rowsPerPageOptions={[5, 10, 25]}
						/>
					</CardActions>
				</Card>
			</div>
		</div>
	);
};

export default Ads;
