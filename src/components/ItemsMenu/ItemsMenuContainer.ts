import { connect } from 'react-redux';
import ItemsMenu from './ItemsMenu';
import { IApplicationState } from '../../store/reducers';

const mapStateToProps = (state: IApplicationState) => ({
	directions: state.rubric.directions,
	specialties: state.rubric.specialties,
	specializations: state.rubric.specializations
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsMenu);
