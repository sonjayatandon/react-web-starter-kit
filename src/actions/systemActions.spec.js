import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './systemActions';

describe('Actions::systemActions', () => {
  it('should authorize the session', () => {
    const validSessionRequest = {
      email: 'foo',
      token: 'ok',
    };

    const expected = {
      type: ActionTypes.AUTH_SESSION
    };

    const action = ActionCreators.authorizeSession(validSessionRequest);
    expect(action).toMatchObject(expected);
  });

  it('should start an ajax call', () => {
    const expected = {
      type: ActionTypes.SYSTEM_AJAX_START
    }

    const action = ActionCreators.startAjax();
    expect(action).toMatchObject(expected);
  });

  it('should navigate to the correct path', () => {
    const expected = {
      type: ActionTypes.SYSTEM_NAVIGATE
    }
    const history = {
      push: jest.fn()
    };
    const action = ActionCreators.go(history,"/the-correct-path");
    expect(action).toMatchObject(expected);
    expect(history.push).toBeCalledWith("/the-correct-path");
  });

  it ('should generate system alert', () => {
    const expected = {
      type: ActionTypes.SYSTEM_ALERT_USER,
      message: 'a message'
    };

    const action = ActionCreators.alertUser('a message');
    expect(action).toMatchObject(expected);
  });

  it ('should clear system alert', () => {
    const expected = {
      type: ActionTypes.SYSTEM_ALERT_CLEAR,
    };

    const action = ActionCreators.alertClear();
    expect(action).toMatchObject(expected);
  });

});
