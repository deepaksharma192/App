import { createVideoNote, getVideoNoteByid } from '../../modules/serverCall'
import lodash from "lodash"

export const BEGIN = 'BEGIN_VIDEO_NOTE'
export const SUCCESS = 'SUCCESS_VIDEO_NOTE'
export const UPDATE = 'UPDATE_VIDEO_NOTE'
export const FAIL = 'FAIL_VIDEO_NOTE'

export const createVideoNotes = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        createVideoNote(data).then((res) => {
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

export const getVideoNoteByids = (cid) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getVideoNoteByid(cid).then((res) => {
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