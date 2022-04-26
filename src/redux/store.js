import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {persistReducer, persistStore} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { reducers } from "./reducers/rootReducer";


export const store = createStore(reducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

store.subscribe(() => console.log(store.getState()));