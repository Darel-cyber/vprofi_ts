import React, { useEffect, useState } from 'react';
import UsersToolbar from './children/UsersToolbar';
import { ICurrentUser, IUsers } from './IUsers';
import UsersTable from './children/UsersTable';
import { CircularProgress } from '@material-ui/core';
import MaterialModal from '../../../../components/common/MaterialModal/MaterialModal';
import Ads from '../Ads/Ads';
import styles from './users.module.scss';
import clsx from 'clsx';

const Users = ({ users, usersLoader, getUsers, getAdsSaga, adsLoader, ads }: IUsers) => {
	const [showUsersAd, setShowUsersAd] = useState(false);

	const [currentUser, setCurrentUser] = useState<ICurrentUser>({ id: -1, name: '' });

	useEffect(() => {
		getUsers();
	}, []);

	const [selectedUserItems, setSelectedUserItems] = useState<number[]>([]);

	const usersAd = () => {
		setShowUsersAd(true);
	};

	return (
		<div className={styles.root}>
			{usersLoader && (
				<div className={clsx(styles.loader, styles.myLoader)}>
					<CircularProgress color="inherit" />
				</div>
			)}
			<UsersToolbar count={selectedUserItems} />
			<div className={styles.content}>
				<UsersTable
					setCurrentUser={setCurrentUser}
					setSelectedUserItems={setSelectedUserItems}
					showAd={usersAd}
					users={users}
				/>
			</div>
			<MaterialModal isOpen={showUsersAd} setIsModalOpen={setShowUsersAd}>
				<Ads user={currentUser} getAdsSaga={getAdsSaga} loader={adsLoader} ads={ads} />
			</MaterialModal>
		</div>
	);
};

export default Users;
