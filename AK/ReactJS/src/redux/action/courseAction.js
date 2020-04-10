import { getAllCourse,getCourseById} from '../../modules/serverCall'
import lodash from "lodash"

export const BEGIN = 'BEGIN_COURSE'
export const SUCCESS = 'SUCCESS_COURSE'
export const FAIL = 'FAIL_COURSE'
export const UPDATE = 'FAIL_COURSE'


export const getAllCourses =()=> (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: BEGIN,
            payload: null
        })
        getAllCourse().then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const getCourseByIds =(id)=> (dispatch) => {
    return new Promise((resolve, reject) => {
        getCourseById(id).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: UPDATE,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            reject(err)
        })
    })
}

