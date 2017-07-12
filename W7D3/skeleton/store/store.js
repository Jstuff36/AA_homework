import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

// import { fetchSearchGiphys } from '../util/api_util';
import { receiveSearchGiphys, fetchSearchGiphys } from '../actions/giphy_actions';

export const configureStore = () => {
  return createStore(RootReducer, applyMiddleware(thunk));
};

window.fetchSearchGiphys = fetchSearchGiphys;
window.receiveSearchGiphys = receiveSearchGiphys;
