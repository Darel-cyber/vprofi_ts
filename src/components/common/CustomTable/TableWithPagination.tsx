import React, { useState } from 'react';
import { Card, CardActions, CardContent, TablePagination } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';

import makeStyles from '@material-ui/core/styles/makeStyles';
import CustomTable, { ICustomTable } from './CustomTable';

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

type ITableWithPagination = ICustomTable;

const TableWithPagination = ({
	dataConfig,
	tableTitles,
	headerConfig,
	allTableData,
	isHover,
	onRowClick,
	setGlobalSelectedItems
}: ITableWithPagination) => {
	const classes = useStyles();
	const [rowsPerPage, setRowsPerPage] = useState<number>(10);
	const [page, setPage] = useState<number>(0);

	const dataFrom = page * rowsPerPage;
	const dataUntil = page * rowsPerPage + rowsPerPage;
	const currentData = allTableData.slice(dataFrom, dataUntil);

	const handlePageChange = (event: unknown, page: number) => {
		setPage(page);
	};

	const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
	};

	return (
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<PerfectScrollbar>
					<div className={classes.inner}>
						<CustomTable
							allTableData={allTableData}
							dataConfig={dataConfig}
							displayedTableData={currentData}
							headerConfig={headerConfig}
							isHover={isHover}
							onRowClick={onRowClick}
							tableTitles={tableTitles}
							setGlobalSelectedItems={setGlobalSelectedItems}
						/>
					</div>
				</PerfectScrollbar>
			</CardContent>
			<CardActions className={classes.actions}>
				<TablePagination
					component="div"
					count={allTableData.length}
					onChangePage={handlePageChange}
					onChangeRowsPerPage={handleRowsPerPageChange}
					page={page}
					rowsPerPage={rowsPerPage}
					rowsPerPageOptions={[5, 10, 25]}
				/>
			</CardActions>
		</Card>
	);
};

export default TableWithPagination;
