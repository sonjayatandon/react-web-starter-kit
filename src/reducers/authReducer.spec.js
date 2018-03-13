import * as ActionTypes from '../constants/actionTypes';
import reducer from './authReducer';


describe('Reducers::authReducer', () => {
  const getInitialState = () => {
    return {
    };
  }

  const getExpectedAuthSuccess = () => {
    return {
      token: "token",
      email: "email"
    };
  }

  class LocalStorageMock {
    constructor() {
      this.store = {}
    }

    clear() {
      this.store = {}
    }

    getItem(key) {
      return this.store[key] || null
    }

    setItem(key, value) {
      this.store[key] = value
    }

    removeItem(key) {
      delete this.store[key]
    }
  }

  global.localStorage = new LocalStorageMock;


  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle AUTH_SUCCESS', () => {
    const action = { type: ActionTypes.AUTH_SUCCESS, token:"token", email: "email"};

    expect(reducer(undefined, action)).toEqual(getExpectedAuthSuccess());
    expect(global.localStorage.getItem("auth")).toEqual(JSON.stringify(getExpectedAuthSuccess()));
  });

  it('should handle AUTH_SESSION', () => {
    const action = { type: ActionTypes.AUTH_SESSION, token:"token", email: "email"};

    expect(reducer(undefined, action)).toEqual(getExpectedAuthSuccess());
    expect(global.localStorage.getItem("auth")).toEqual(JSON.stringify(getExpectedAuthSuccess()));
  });

  it ('should handle AUTH_LOGOUT', () => {
    const authAction = { type: ActionTypes.AUTH_SUCCESS, token:"token", email: "email"};
    const unAuthAction = { type: ActionTypes.AUTH_LOGOUT};

    reducer(undefined, authAction);
    expect(global.localStorage.getItem("auth")).toEqual(JSON.stringify(getExpectedAuthSuccess()));
    expect(reducer(getExpectedAuthSuccess(), unAuthAction)).toEqual(getInitialState());
    expect(global.localStorage.getItem("auth")).toEqual(null);
  });

});
