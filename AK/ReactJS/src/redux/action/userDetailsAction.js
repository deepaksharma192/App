import { getUserDetails, updateUserDetails, updateUserDetailsAll } from '../../modules/serverCall'
import lodash from "lodash"

export const POST_DETAILS_BEGIN = 'POST_DETAILS_BEGIN'
export const POST_DETAILS_SUCCESS = 'POST_DETAILS_SUCCESS'
export const POST_DETAILS_FAIL = 'POST_DETAILS_FAIL'
export const INSERT_DETAILS_SUCCESS = 'INSERT_DETAILS_SUCCESS'
export const INSERT_DETAILS_FAIL = 'INSERT_DETAILS_FAIL'

export const getUserDetail =()=> (dispatch) => {
    return new Promise((resolve, reject) => {
        getUserDetails().then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: POST_DETAILS_SUCCESS,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: INSERT_DETAILS_FAIL,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const updateUserDetail = (form) => {
    return new Promise((resolve, reject) => {
        updateUserDetails(form).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err)
        })
    })
}
export const updateUserDetailAll = (form) => (dispatch) => {
    return new Promise((resolve, reject) => {
        updateUserDetailsAll(form).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: POST_DETAILS_SUCCESS,
                payload: data
            })
            resolve(res.data);
        }).catch((err) => {
            dispatch({
                type: INSERT_DETAILS_FAIL,
                payload: { err }
            })
            reject(err)
        })
    })
}