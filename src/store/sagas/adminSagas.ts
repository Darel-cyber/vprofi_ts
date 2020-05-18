import { put, call, takeLatest } from 'redux-saga/effects';
import * as adminActions from '../actions/admin';
import * as adminRequests from '../../utils/api/admin';
import { adminTypes } from '../constants/admin';

function* getUsersSaga() {
	try {
		yield put(adminActions.setUsersLoader(true));
		const response = yield call(adminRequests.requestUsers);
		yield put(adminActions.setUsers(response.data));
	} catch (error) {
		console.log(error);
	} finally {
		yield put(adminActions.setUsersLoader(false));
	}
}

function* getAdsSaga(action: ReturnType<typeof adminActions.getAdsSaga>) {
	try {
		yield put(adminActions.setAdsLoader(true));
		const response = yield call(adminRequests.requestAdminsAds, action.userId);
		yield put(adminActions.setAds(response.data));
	} catch (error) {
		console.log(error);
	} finally {
		yield put(adminActions.setAdsLoader(false));
	}
}

export default function* watchEntities() {
	yield takeLatest(adminTypes.GET_USERS_SAGA, getUsersSaga);
	yield takeLatest(adminTypes.GET_ADS_SAGA, getAdsSaga);
}
