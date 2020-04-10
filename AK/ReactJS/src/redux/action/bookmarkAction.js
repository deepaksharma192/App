import { getBookmarkByid, updaateBookmark } from '../../modules/serverCall'
import lodash from "lodash"

export const BEGIN = 'BEGIN_BOOKMARK'
export const SUCCESS = 'SUCCESS_BOOKMARK'
export const UPDATE = 'UPDATE_BOOKMARK'
export const FAIL = 'FAIL_BOOKMARK'
export const TOPIC_VIDEO = 'TOPIC_VIDEO'
export const VIDEO_TIME = 'VIDEO_TIME'
export const TAB = 'TAB'
export const NEW_BOOKMARK = 'NEW_BOOKMARK'

export const getBookmarkByIds = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getBookmarkByid(id).then((res) => {
            let data = lodash.get(res.data, "data", null);
            let uid = lodash.get(res.data, "uid", null);
            dispatch({
                type: SUCCESS,
                payload: data[0]
            })
            resolve({data,uid});
        }).catch((err) => {
            dispatch({
                type: FAIL,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const updaateBookmarksToStore = (key, form) => (dispatch) => {
    return new Promise(async (resolve, reject) => {
        await dispatch({
            type: key,
            payload: form
        })
        resolve('done')
    })
}
export const updaateBookmarks = (form, cid) => (dispatch) => {
    return new Promise((resolve, reject) => {
        lodash.set(form, 'cid', cid);
        updaateBookmark(form).then((res) => {
            let data = lodash.get(res.data, "data", null);
            resolve(data);
        }).catch((err) => {
            reject(err)
        })
    })
}