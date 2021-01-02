import {createStore} from "redux";
import Reducer from "../reducers/Reducer";
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
export const store = createStore(Reducer);