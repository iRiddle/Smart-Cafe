import Api from './Api'

export default {
  signup (credentials) {
    return Api().post('signup', credentials)
  }
}

// AuthenticationService.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })
