import * as ActionTypes from '../constants/actionTypes';
import reducer from './alertReducer';

describe('Reducers::alertReducer', () => {
  it('should set initial state by default', () => {
    const action = {type: 'unknown'};

    expect(reducer(undefined, action)).toEqual(null);
  });

  it('should set an alert message when none is set', () => {
    const action = {type: ActionTypes.SYSTEM_ALERT_USER, message:'a message'};

    expect(reducer(undefined, action)).toEqual('a message');
  });

  it('should override an alert message when one is already set', () => {
    const action = {type: ActionTypes.SYSTEM_ALERT_USER, message:'a message'};

    expect(reducer('a older message', action)).toEqual('a message');
  });

  it('should not change the message when different action is sent', () => {
    const action = {type: ActionTypes.SYSTEM_AJAX_START}

    expect(reducer('old message', action)).toEqual('old message');
  });

  it('should clear a message', () => {
    const action = {type: ActionTypes.SYSTEM_ALERT_CLEAR};

    expect(reducer('old message', action)).toEqual(null);
  })
});

