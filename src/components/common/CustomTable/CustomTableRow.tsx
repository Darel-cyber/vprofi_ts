import React from 'react';
import { TableRow } from '@material-ui/core';
import { IFuncParams } from './CustomTable';

interface ICustomTableRow {
	isHover: boolean;
	children: React.ReactNode;
	onClick?: (params: IFuncParams) => void;
	selected?: boolean;
}

const CustomTableRow = ({ onClick, isHover, selected, children }: ICustomTableRow) => {
	switch (true) {
		case !!onClick: {
			return (
				<TableRow hover={isHover} onClick={onClick} selected={selected}>
					{children}
				</TableRow>
			);
		}

		default: {
			return (
				<TableRow hover={isHover} selected={selected}>
					{children}
				</TableRow>
			);
		}
	}
};

export default CustomTableRow;
