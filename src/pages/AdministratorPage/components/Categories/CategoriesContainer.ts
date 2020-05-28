import { connect } from 'react-redux';
import { IApplicationState } from '../../../../store/reducers';
import Categories from './Categories';
import { getRubricsSaga } from '../../../../store/actions/rubric';

const mapStateToProps = (state: IApplicationState) => ({
	directions: state.rubric.directions,
	specialties: state.rubric.specialties,
	specializations: state.rubric.specializations,
	globalLoader: state.app.globalLoader
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
