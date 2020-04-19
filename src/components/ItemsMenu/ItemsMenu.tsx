import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { green } from '@material-ui/core/colors';
import { IDirection, ISpecialization, ISpecialty } from '../../store/types/rubric';
import RightSide from './components/RightSide';

interface ITabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

interface ITabParams {
	id: string;
	'aria-controls': string;
}

interface IItemMenu {
	directions: IDirection[];
	specialties: ISpecialty[];
	specializations: ISpecialization[];
}

const TabPanel = (props: ITabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			style={{ width: '84%' }}
			{...other}
		>
			{value === index && <Box p={3} pr={0}>{children}</Box>}
		</Typography>
	);
};

const makeTabParams = (index: number): ITabParams => ({
	id: `vertical-tab-${index}`,
	'aria-controls': `vertical-tabpanel-${index}`
});

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		minHeight: 500
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`
	}
}));

const ItemsMenu = ({ directions, specialties, specializations }: IItemMenu) => {
	const classes = useStyles();
	const [value, setValue] = React.useState<number>(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				TabIndicatorProps={{
					style: {
						backgroundColor: green[500]
					}
				}}
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
			>
				{directions.map((direction: IDirection, key: number) => (
					<Tab label={`${direction.name}`} key={key} {...makeTabParams(direction.id)} />
				))}
			</Tabs>

			{directions.map((direction: IDirection, key: number) => (
				<TabPanel key={key} value={value} index={key}>
					{direction.haveChild ? (
						<RightSide
							direction={direction}
							specialties={specialties}
							specializations={specializations}
							key={`rightSide${key}`}
						/>
					) : (
						<span>No Data</span>
					)}
				</TabPanel>
			))}
		</div>
	);
};

export default ItemsMenu;
