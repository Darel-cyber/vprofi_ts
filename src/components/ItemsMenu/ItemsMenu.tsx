import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface ITabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

interface ITabParams {
	id: string;
	ariaControls: string;
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
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
};

const makeTabParams = (index: number): ITabParams => ({
	id: `vertical-tab-${index}`,
	ariaControls: `vertical-tabpanel-${index}`
});

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: 500
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`
	}
}));

const ItemsMenu = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState<number>(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
			>
				<Tab label="Item One" {...makeTabParams(0)} />
				<Tab label="Item Two" {...makeTabParams(1)} />
				<Tab label="Item Three" {...makeTabParams(2)} />
				<Tab label="Item Four" {...makeTabParams(3)} />
				<Tab label="Item Five" {...makeTabParams(4)} />
				<Tab label="Item Six" {...makeTabParams(5)} />
				<Tab label="Item Seven" {...makeTabParams(6)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
			<TabPanel value={value} index={3}>
				Item Four
			</TabPanel>
			<TabPanel value={value} index={4}>
				Item Five
			</TabPanel>
			<TabPanel value={value} index={5}>
				Item Six
			</TabPanel>
			<TabPanel value={value} index={6}>
				Item Seven
			</TabPanel>
		</div>
	);
};

export default ItemsMenu;
