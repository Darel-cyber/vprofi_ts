import * as rubricActions from '../actions/rubric';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as appActions from '../actions/app';
import { RubricTypes } from '../constants/rubric';
import * as rubricRequests from '../../utils/api/rubric';

function* getRubricsSaga() {
	try {
		yield put(appActions.setGlobalLoader(true));
		const directionsResponse = yield call(rubricRequests.requestDirections);
		const specialtiesResponse = yield call(rubricRequests.requestSpecialties);
		const specializationsResponse = yield call(rubricRequests.requestSpecializations);

		yield put(rubricActions.setDirections(directionsResponse.data));
		yield put(rubricActions.setSpecialties(specialtiesResponse.data));
		yield put(rubricActions.setSpecializations(specializationsResponse.data));
	} catch (error) {
		console.log(error);
	}
	yield put(appActions.setGlobalLoader(false));
}

export default function* watchEntities() {
	yield takeLatest(RubricTypes.GET_RUBRICS_SAGA, getRubricsSaga);
}
