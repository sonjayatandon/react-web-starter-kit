import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './userActions';

describe('Actions::userActions', () => {
  const validLoginRequest = {
    email: 'foo',
    password: 'ok',
    history: {
      push: jest.fn()
    }
  };

  const invalidLoginRequest = {
    email: 'foo',
    password: 'this is bad',
    history: {
      push: jest.fn()
    }
  };

  it('should login with correct password and set history to root path', async () => {
    let dispatch= await jest.fn();
    await ActionCreators.login(validLoginRequest)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: ActionTypes.AUTH_SUCCESS,
        token: "token",
        email: "foo",
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: ActionTypes.SYSTEM_NAVIGATE,
        path: "/",
        history: validLoginRequest.history
      })
    );
    expect(validLoginRequest.history.push).toBeCalledWith("/");
  });

  it('should not login with wrong password', async () => {
    const expected = {
      type: ActionTypes.AUTH_FAILURE,
      error: 'login failed'
    };

    const dispatch=jest.fn();

    await ActionCreators.login(invalidLoginRequest)(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should logout', () => {
    const expected = {
      type: ActionTypes.AUTH_LOGOUT
    };

    const history = {
      push: jest.fn()
    };
    const action = ActionCreators.logout(history);
    expect(action).toMatchObject(expected);
    expect(history.push).toBeCalledWith("/");
  })
});
