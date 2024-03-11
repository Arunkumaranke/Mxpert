
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import getPrdoucts from './saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({reducer:rootReducer,
middleware:() =>[sagaMiddleware]});

sagaMiddleware.run(getPrdoucts);

export default store;