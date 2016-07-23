import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

export const LOAD = 'widgets/LOAD';

const createWidget = (id, name) => ({ id, name });

const initialState = [];
function widgets(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return [
        createWidget('1', 'biz'),
        createWidget('2', 'boop')
      ];

    default:
      return state;
  }
}

export default combineReducers({
  widgets,
  form
})
