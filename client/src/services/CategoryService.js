import Api from './Api'
export default {
  put (category, id) {
    return Api().put(`categories/${id}`, category)
  },
  show (id) {
    return Api().get(`categories/${id}`)
  }
  // delete
  // update
}
