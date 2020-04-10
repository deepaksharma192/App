import { login,veryfyOtp,homedata} from '../../modules/serverCall'

export const homepagedata = () => {
  return homedata()
    .then(res => {
        return res.data
    })
    .catch(error => {
      throw error
    })
}
export const sendOtp = (number) => {
  return login(number)
    .then(res => {
        return res.data
    })
    .catch(error => {
      throw error
    })
}
export const veryfyOtps = (number,otp) => dispatch => {
  dispatch({
    type: POST_TOKEN_BEGIN
  })
  return veryfyOtp(number,otp)
    .then(res => {
      setTimeout(() => {
        dispatch({
          type: POST_TOKEN_SUCCESS,
          payload: number
        })
        return res
      }, 1)

    })
    .catch(error => {
      dispatch({
        type: POST_TOKEN_FAIL,
        payload: { error }
      })
      throw error
    })
}

export const insertToken = () => dispatch => {
  let token
  if (localStorage.getItem('auth')) {
    token = JSON.parse(localStorage.getItem('auth'))
    dispatch({
      type: INSERT_TOKEN_SUCCESS,
      payload: token
    })
  } else {
    dispatch({
      type: INSERT_TOKEN_FAIL
    })
  }
}

export const POST_TOKEN_BEGIN = 'POST_TOKEN_BEGIN'
export const POST_TOKEN_SUCCESS = 'POST_TOKEN_SUCCESS'
export const POST_TOKEN_FAIL = 'POST_TOKEN_FAIL'
export const INSERT_TOKEN_SUCCESS = 'INSERT_TOKEN_SUCCESS'
export const INSERT_TOKEN_FAIL = 'INSERT_TOKEN_FAIL'


