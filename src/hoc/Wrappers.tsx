import React, { ReactNode } from 'react'
import { compose } from 'redux'
import withSnackbar from './withSnackbar/withSnackbar'

interface IProps {
	children: ReactNode
	// any other props that come into the component
}

const Wrappers = (props: IProps) => {
	const ChildrenWithWrappers = compose(withSnackbar)(() => (
		<>{props.children}</>
	)) as React.FunctionComponent
	return <ChildrenWithWrappers />
}

export default Wrappers
