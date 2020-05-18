import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { IUser } from '../../../../../store/types/user';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	Typography
} from '@material-ui/core';
import getInitials from '../../../../../utils/getInitials';
import { ICurrentUser } from '../IUsers';

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
}

const UsersTable = ({ users, showAd, setCurrentUser }: IUsersTable) => {
	const classes = useStyles();

	const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
	const [rowsPerPage, setRowsPerPage] = useState<number>(10);
	const [page, setPage] = useState<number>(0);

	const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
		let selectedUsers: number[];

		if (event.target.checked) {
			selectedUsers = users.map((user: IUser) => user.id);
		} else {
			selectedUsers = [];
		}

		setSelectedUsers(selectedUsers);
	};

	const handleSelectOne = (event: any, id: number) => {
		// event.preventDefault();
		event.stopPropagation();

		const selectedIndex = selectedUsers.indexOf(id);
		let newSelectedUsers: number[] = [];

		if (selectedIndex === -1) {
			newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
		} else if (selectedIndex === 0) {
			newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
		} else if (selectedIndex === selectedUsers.length - 1) {
			newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelectedUsers = newSelectedUsers.concat(
				selectedUsers.slice(0, selectedIndex),
				selectedUsers.slice(selectedIndex + 1)
			);
		}

		setSelectedUsers(newSelectedUsers);
	};

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
						<Table>
							<TableHead>
								<TableRow>
									<TableCell padding="checkbox">
										<Checkbox
											checked={selectedUsers.length === users.length}
											color="primary"
											indeterminate={selectedUsers.length > 0 && selectedUsers.length < users.length}
											onChange={handleSelectAll}
										/>
									</TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Email</TableCell>
									<TableCell>Location</TableCell>
									<TableCell>Phone</TableCell>
									<TableCell>Registration date</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{users.slice(0, rowsPerPage).map(user => (
									<TableRow
										//className={classes.tableRow}
										hover
										key={user.id}
										selected={selectedUsers.indexOf(user.id) !== -1}
										onClick={() => {
											setCurrentUser({ id: user.id, name: user.name });
											showAd();
										}}
									>
										<TableCell padding="checkbox">
											<Checkbox
												checked={selectedUsers.indexOf(user.id) !== -1}
												color="primary"
												onClick={event => handleSelectOne(event, user.id)}
												value="true"
											/>
										</TableCell>
										<TableCell>
											<div className={classes.nameContainer}>
												<Avatar className={classes.avatar} src={user.avatarUrl}>
													{getInitials(user.name)}
												</Avatar>
												<Typography variant="body1">{user.name}</Typography>
											</div>
										</TableCell>
										<TableCell>{user.email}</TableCell>
										<TableCell>
											{user.address.city}, {user.address.state}, {user.address.country}
										</TableCell>
										<TableCell>{user.phone}</TableCell>
										<TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
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
					count={users.length}
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

export default UsersTable;
