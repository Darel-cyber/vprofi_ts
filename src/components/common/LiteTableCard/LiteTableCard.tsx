import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import CustomTable, { ITableConfig, ITableData, ITableTitles } from '../CustomTable/CustomTable';

const useStyles = makeStyles(theme => ({
	root: {},
	content: {
		padding: 0
	},
	inner: {
		minWidth: 500
	}
}));

interface ITableCard {
	tableTitles: ITableTitles;
	dataConfig: ITableConfig;
	headerConfig: ITableConfig;
	tableData: ITableData[];
	tableName: string;
}

const LiteTableCard = ({ tableTitles, dataConfig, headerConfig, tableData, tableName }: ITableCard) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader title={tableName} />
			<Divider />
			<CardContent className={classes.content}>
				<PerfectScrollbar>
					<div className={classes.inner}>
						<CustomTable
							allTableData={tableData}
							dataConfig={dataConfig}
							headerConfig={headerConfig}
							isHover={false}
							tableTitles={tableTitles}
						/>
					</div>
				</PerfectScrollbar>
			</CardContent>
		</Card>
	);
};

export default LiteTableCard;
