import delay from './delay';

class UsersService {
  static login(username, password) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === "ok") {
          resolve("token");
        } else {
          reject("login failed");
        }
      }, delay);
    });
  }
}

export default UsersService;

