class Auth {
  constructor() {
    this.user_token = JSON.parse(localStorage.getItem('auth')) || {}
  }
  getToken() {
    return JSON.parse(localStorage.getItem('auth')) || {}
  }
  getUserId() {
    return this.user_token.user_id
  }
  setUserToken(new_token) {
    this.user_token = new_token
    localStorage.setItem('auth', JSON.stringify(new_token))
  }
  logout() {
    localStorage.removeItem('auth');
    localStorage.clear();
  }
}
export default new Auth()