import { combineReducers }             from 'redux';
import { MINUS_COUNTER, PLUS_COUNTER } from '../actions';

const counter = (state = 0, action) => {
  switch ( action.type ) {
    case PLUS_COUNTER:
      return state + 1;
    case MINUS_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter
});

export default rootReducer;