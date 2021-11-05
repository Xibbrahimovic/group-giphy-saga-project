import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import App from "./components/App/App";

function* rootSaga() {
  yield takeEvery("FETCH_RESULTS", fetchResults);
  yield takeEvery("FETCH_FAVORITES", fetchFavorites);
  yield takeEvery("ADD_FAVORITE", addFavorite);
  yield takeEvery("UPDATE_FAVORITE", updateFavorite);
}

function* fetchResults(action) {
  try {
    console.log("this is action.payload", action.payload);
    let searchTerm = action.payload;
    const response = yield axios.get(`/api/search/${searchTerm}`);
    //sends results to searchReducer
    yield put({ type: "SET_RESULTS", payload: response.data.data });
  } catch (err) {
    console.log(err);
    put({ type: "ERROR" });
  }
}

function* fetchFavorites() {
  try {
    const response = yield axios.get("/api/favorite");
    //sends results to favoritesReducer
    yield put({ type: "SET_FAVORITES", payload: response.data });
  } catch (err) {
    console.log(err);
    put({ type: "FETCH_FAVORITES_ERROR" });
  }
}

function* addFavorite(action) {
  try {
    yield axios.post("/api/favorite", action.payload);
    yield put({ type: "FETCH_FAVORITES" });
  } catch (err) {
    console.log(err);
    yield put({ type: "POST_FAVORITES_ERROR" });
  }
}

function* updateFavorite(action) {
  try {
    yield axios.put(
      `/api/favorite/${action.payload.id}`,
      action.payload.category_id
    );
    yield put({ type: "FETCH_FAVORITES" });
  } catch (err) {
    console.log(err);
    yield put({ type: "POST_ERROR" });
  }
}

//reducer to store favorites
const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return action.payload;
    default:
      return state;
  }
};

//reducer to append to DOM, only needs GET request
const searchReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return action.payload;
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    searchReducer,
    favoriteReducer,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
