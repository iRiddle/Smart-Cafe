import Api from './Api'

export default {
  signup (credentials) {
    return Api().post('signup', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// AuthenticationService.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })
