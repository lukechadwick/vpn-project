import { combineReducers } from 'redux';

import { items, itemsHasErrored, itemsIsLoading } from './example_reducer';

import { auth } from './auth';

export default combineReducers({
  auth,
  items,
  itemsHasErrored,
  itemsIsLoading
});
