import React, { useState } from 'react';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import CustomTableCell from './CustomTableCell';
import CustomTableRow from './CustomTableRow';

export interface ITableConfig {
	[headers: string]:
		| 'checkboxAll'
		| 'checkbox'
		| 'withAvatar'
		| 'status'
		| 'date'
		| 'isDeleted'
		| 'isActive'
		| 'default';
}

export interface ITableTitles {
	[headers: string]: string;
}

export interface ITableData {
	id: number;
	[data: string]: any;
}

export interface IFuncParams {
	[name: string]: any;
}

export interface ICustomTable {
	tableTitles: ITableTitles;
	dataConfig: ITableConfig;
	headerConfig: ITableConfig;
	allTableData: ITableData[];
	displayedTableData?: ITableData[];

	isHover: boolean;
	onRowClick?: (params: IFuncParams) => void;

	setGlobalSelectedItems?: (itemsId: number[]) => void;
}

const getType = (dataConfig: ITableConfig, itemKey: string): string => {
	if (dataConfig[itemKey]) {
		return dataConfig[itemKey];
	} else {
		return 'default';
	}
};

const CustomTable = ({
	tableTitles,
	dataConfig,
	headerConfig,
	allTableData,
	displayedTableData,
	isHover,
	onRowClick,
	setGlobalSelectedItems
}: ICustomTable) => {
	const config = Object.entries(tableTitles);

	const [selectedItems, setSelectedItems] = useState<number[]>([]);

	const setItems = (items: number[]): void => {
		setSelectedItems(items);
		if (setGlobalSelectedItems) setGlobalSelectedItems(items);
	};

	const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
		let selectedItems: number[];

		if (event.target.checked) {
			selectedItems = allTableData.map((data: ITableData) => data.id);
		} else {
			selectedItems = [];
		}

		setItems(selectedItems);
	};

	const handleSelectOne = (event: any, id: number) => {
		// event.preventDefault();
		event.stopPropagation();

		const selectedIndex = selectedItems.indexOf(id);
		let newSelectedUsers: number[] = [];

		if (selectedIndex === -1) {
			newSelectedUsers = newSelectedUsers.concat(selectedItems, id);
		} else if (selectedIndex === 0) {
			newSelectedUsers = newSelectedUsers.concat(selectedItems.slice(1));
		} else if (selectedIndex === selectedItems.length - 1) {
			newSelectedUsers = newSelectedUsers.concat(selectedItems.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelectedUsers = newSelectedUsers.concat(
				selectedItems.slice(0, selectedIndex),
				selectedItems.slice(selectedIndex + 1)
			);
		}

		setItems(newSelectedUsers);
	};

	const dataForShow = displayedTableData || allTableData;

	return (
		<Table>
			<TableHead>
				<TableRow>
					{config.map((cell: [string, string], key: number) => (
						<CustomTableCell
							handleSelectAll={handleSelectAll}
							items={allTableData}
							key={key}
							selectedItems={selectedItems}
							type={getType(headerConfig, cell[0])}
							value={cell[1]}
						/>
					))}
				</TableRow>
			</TableHead>

			<TableBody>
				{dataForShow.map((data: ITableData, key: number) => (
					<CustomTableRow
						isHover={isHover}
						key={key}
						onClick={onRowClick ? () => onRowClick({ id: data.id, name: data.name }) : undefined}
					>
						{Object.entries(dataConfig).map((param: [string, string], cellKey: number) => (
							<CustomTableCell
								handleSelectOne={handleSelectOne}
								item={data}
								key={cellKey}
								selectedItems={selectedItems}
								type={param[1]}
								value={data[param[0]]}
							/>
						))}
					</CustomTableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default CustomTable;
