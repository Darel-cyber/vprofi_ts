import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
	Card,
	CardHeader,
	CardContent,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from '@material-ui/core';
import CustomTableCell from '../CustomTableCell/CustomTableCell';

const useStyles = makeStyles(theme => ({
	root: {},
	content: {
		padding: 0
	},
	inner: {
		minWidth: 500
	}
}));

interface IServiceData {
	status?: 'active' | 'blocked';
	date?: string;
}

export interface ITableConfig {
	[headers: string]: string;
}

export interface ITableData extends IServiceData {
	[data: string]: any;
}

interface ITableCard {
	tableConfig: ITableConfig;
	tableData: ITableData;
	tableName: string;
}

const LiteTableCard = ({ tableConfig, tableData, tableName }: ITableCard) => {
	const classes = useStyles();
	const config = Object.values(tableConfig);

	return (
		<Card className={classes.root}>
			<CardHeader title={tableName} />
			<Divider />
			<CardContent className={classes.content}>
				<PerfectScrollbar>
					<div className={classes.inner}>
						<Table>
							<TableHead>
								<TableRow>
									{config.map((user: string, key: number) => (
										<TableCell key={key}>{user}</TableCell>
									))}
								</TableRow>
							</TableHead>

							<TableBody>
								{tableData.map((user: ITableData, key: number) => (
									<TableRow hover key={key}>
										{Object.entries(user).map((cell: string[], key: number) => (
											<CustomTableCell key={key} type={cell[0]} value={cell[1]} />
										))}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</PerfectScrollbar>
			</CardContent>
		</Card>
	);
};

export default LiteTableCard;
