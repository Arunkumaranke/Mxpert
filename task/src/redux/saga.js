import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST,SET_PRODUCT_LIST } from './constant';

function* getPrdoucts() {
   let data = yield fetch('https://5d451f2ed823c30014771b95.mockapi.io/data')
   data = yield data.json();
   yield put({type: SET_PRODUCT_LIST, data})
}


export default getPrdoucts;