import {createStore, applyMiddleware, compose} from "redux";

// middlewares
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from './reducer-root';

const middlewares = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);