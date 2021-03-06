import { getAllCourse, getCourseById ,getAllClassesFromServer} from '../../modules/serverCall'
import lodash from "lodash"

export const BEGIN = 'BEGIN_COURSE'
export const SUCCESS = 'SUCCESS_COURSE'
export const FAIL = 'FAIL_COURSE'
export const UPDATE = 'FAIL_COURSE'
export const SUCCESS_CLASSES = 'SUCCESS_CLASSES'
//getAllClassesFromServer
export const getAllClasses = () => (dispatch) => {
    return new Promise((resolve, reject) => {

        dispatch({
            type: BEGIN,
            payload: null
        })
        getAllClassesFromServer().then((res) => {
            let data = lodash.get(res.data, "data", []);
            try {
              
                dispatch({
                    type: SUCCESS_CLASSES,
                    payload: data
                })
                resolve(data);
            } catch (err) {
                dispatch({
                    type: FAIL,
                    payload: { err }
                })
                reject(err)
            }

        }).catch((err) => {
            dispatch({
                type: FAIL,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const getAllCourses = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: BEGIN,
            payload: null
        })
        getAllCourse().then((res) => {
            let data = lodash.get(res.data, "data", []);
            try {
                if(res.data.data){
                    let s4 = data.get_subjects.map((v) => {
                        let sid = v._id
                        let c = data.get_course.filter((v1) => {
                            return v1.subject_id === sid;
                        })
                        v['courses'] = c;
                        return v;
                    });
                    let classes = Object.assign({}, data.get_classes);
                    classes['subjects'] = s4;
                    dispatch({
                        type: SUCCESS,
                        payload: classes
                    })
                }else{
                    dispatch({
                        type: FAIL,
                        payload: data
                    })
                }
                
                resolve(data);
            } catch (err) {
                dispatch({
                    type: FAIL,
                    payload: { err }
                })
                reject(err)
            }

        }).catch((err) => {
            dispatch({
                type: FAIL,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const getCourseByIds = (id) => (dispatch) => {
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

