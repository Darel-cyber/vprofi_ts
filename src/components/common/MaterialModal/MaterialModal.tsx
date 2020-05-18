import React, { ReactNode } from 'react';
import styles from './materialModal.module.scss';
import Modal from '@material-ui/core/Modal';
import { Zoom } from '@material-ui/core';

export interface IModal {
	isOpen: boolean;
	setIsModalOpen: (isModalOpen: boolean) => void;
	children: ReactNode;
}

const MaterialModal = ({ children, isOpen, setIsModalOpen }: IModal) => (
	<div>
		<Modal
			BackdropProps={{
				timeout: 500
			}}
			onClose={() => setIsModalOpen(false)}
			open={isOpen}
			style={{ overflowY: 'auto', outline: 'none' }}
		>
			<Zoom in={isOpen}>
				<div className={styles.modalOverflow}>
					<div className={styles.modalFlex}>
						<div className={styles.modalBackground} onClick={() => setIsModalOpen(false)} />
						<div className={styles.modal}>{children}</div>
					</div>
				</div>
			</Zoom>
		</Modal>
	</div>
);

export default MaterialModal;
