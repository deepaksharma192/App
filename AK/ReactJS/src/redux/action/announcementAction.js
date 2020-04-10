import { getAnnouncementByid} from '../../modules/serverCall'
import lodash from "lodash"

export const BEGIN = 'BEGIN_ANNOUNCEMENT'
export const SUCCESS = 'SUCCESS_ANNOUNCEMENT'
export const UPDATE = 'UPDATE_ANNOUNCEMENT'
export const FAIL = 'FAIL_ANNOUNCEMENT'

export const getAnnouncementByids = (ctype) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getAnnouncementByid(ctype).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL,
                payload:err
            })
            reject(err)
        })
    })
}
