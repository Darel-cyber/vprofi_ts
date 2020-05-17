import { put, call, takeLatest } from 'redux-saga/effects';
import * as adminActions from '../actions/admin';
import * as adminRequests from '../../utils/api/admin';
import { AdminTypes } from '../constants/admin';

function* getUsersSaga() {
	try {
		yield put(adminActions.setLoader(true));
		const response = yield call(adminRequests.requestUsers);
		yield put(adminActions.setUsers(response.data));
	} catch (error) {
		console.log(error);
	} finally {
		yield put(adminActions.setLoader(false));
	}
}

export default function* watchEntities() {
	yield takeLatest(AdminTypes.GET_USERS, getUsersSaga);
}
