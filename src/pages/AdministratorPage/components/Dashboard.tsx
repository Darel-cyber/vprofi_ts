import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid } from '@material-ui/core';
import LittleCard from '../../../components/common/LittleCard/LittleCard';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { requestDashboard } from '../../../utils/api/admin';
import { ITableConfig, ITableData, ITableTitles } from '../../../components/common/CustomTable/CustomTable';
import LiteTableCard from '../../../components/common/LiteTableCard/LiteTableCard';

const getDashboard = (): Promise<ITableData[]> =>
	new Promise((resolve, reject) => {
		requestDashboard()
			.then(response => {
				const data: ITableData[] = response.data;
				resolve(data);
			})
			.catch(error => {
				console.log(error);
				reject('Не удалось загрузить необходимые данные');
			});
	});

const tableTitles: ITableTitles = {
	name: 'Имя',
	id: 'id',
	date: 'Дата регистрации',
	status: 'Статус'
};

const dataConfig: ITableConfig = {
	name: 'default',
	id: 'default',
	date: 'default',
	status: 'status'
};

const headerConfig: ITableConfig = {
	name: 'default',
	id: 'default',
	date: 'default',
	status: 'default'
};

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4)
	},
	differenceIcon: {
		color: theme.palette.success.dark
	},
	icon: {
		height: 32,
		width: 32
	}
}));

const Dashboard = () => {
	const classes = useStyles();
	const [tableData, setTableData] = useState<ITableData[]>([]);
	useEffect(() => {
		getDashboard()
			.then((response: ITableData[]) => {
				setTableData(response);
			})
			.catch(error => console.log(error));
	}, []);

	console.log(tableData);

	return (
		<div className={classes.root}>
			<Grid container spacing={4}>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<LittleCard
						extraIcon={<ArrowUpwardIcon className={classes.differenceIcon} />}
						extraLabel={'Since last month'}
						extraValue={'16%'}
						icon={<PeopleIcon className={classes.icon} />}
						label={'TOTAL USERS'}
						value={'1,600'}
					/>
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<LittleCard label={'TOTAL PROFIT'} value={'$23,200'} icon={<AttachMoneyIcon className={classes.icon} />} />
				</Grid>
				<Grid item lg={8} md={8} xl={6} xs={12}>
					<LiteTableCard
						headerConfig={headerConfig}
						dataConfig={dataConfig}
						tableTitles={tableTitles}
						tableData={tableData}
						tableName={'Новые пользователи'}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Dashboard;
