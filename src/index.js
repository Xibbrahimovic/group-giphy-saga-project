import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

import App from './components/App/App';

function* rootSaga() {
    yield takeEvery('FETCH_RESULTS', fetchResults);
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery('UPDATE_FAVORITE', updateFavorite);
}




ReactDOM.render(<App />, document.getElementById('root'));
