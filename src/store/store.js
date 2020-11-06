import {createStore, applyMiddleware, compose} from "redux";

// middlewares
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from './reducer-root';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk, logger];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);