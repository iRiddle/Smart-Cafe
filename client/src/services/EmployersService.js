import Api from '@/services/Api'
export default {
  index (search) {
    return Api().get('employers', {
      params: {
        search: search
      }
    })
  },
  put (employer, id) {
    return Api().put(`employers/${id}`, employer)
  },
  show (id) {
    return Api().get(`employers/${id}`)
  }
}
