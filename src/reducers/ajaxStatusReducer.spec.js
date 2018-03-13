import * as ActionTypes from '../constants/actionTypes';
import reducer from './ajaxStatusReducer';

describe('Reducers::ajaxStatusReducer', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };

    expect(reducer(undefined, action)).toEqual(0);
  });

  it('should increment on ajax start with default state', () => {
    const action = {type: ActionTypes.SYSTEM_AJAX_START};

    expect(reducer(undefined, action)).toEqual(1);
  });

  it ('should increment on ajax start with existing state', () => {
    const action = {type: ActionTypes.SYSTEM_AJAX_START};

    expect(reducer(2, action)).toEqual(3);
  });

  it ('shoud decrement on any successful action', () => {
    const action = {type: "SOME_ACTION_SUCCESS"};

    expect(reducer(2, action)).toEqual(1);
  });

  it ('should decrement on any failed action', () => {
    const action = {type: "SOME_ACTION_FAILURE"};

    expect(reducer(2, action)).toEqual(1);
  });

  it ('should ignore any other action', () => {
    const action = {type: ActionTypes.SYSTEM_NAVIGATE};

    expect(reducer(2, action)).toEqual(2);
  });
});
