import { getAllClass,saveClassForAdmin,getAllSubject,saveSubjectForAdmin,getAllChapter,saveChapterForAdmin,getAllTopic,saveTopicForAdmin,getAllVideo,saveVideocForAdmin } from '../../modules/serverCall'
import lodash from "lodash"

export const SUCCESS_ADD_CALSS = 'SUCCESS_ADD_CALSS';
export const FAIL_ADD_CLASS= 'FAIL_ADD_CLASS';
export const SUCCESS_ADD_SUBJECT = 'SUCCESS_ADD_SUBJECT';
export const FAIL_ADD_SUBJECT = 'FAIL_ADD_SUBJECT';
export const SUCCESS_ADD_CHAPTER = 'SUCCESS_ADD_CHAPTER';
export const FAIL_ADD_CHAPTER = 'FAIL_ADD_CHAPTER';
export const SUCCESS_ADD_TOPIC = 'SUCCESS_ADD_TOPIC';
export const FAIL_ADD_TOPIC = 'FAIL_ADD_TOPIC';
export const SUCCESS_ADD_VIDEO = 'SUCCESS_ADD_VIDEO';
export const FAIL_ADD_VIDEO = 'FAIL_ADD_VIDEO';

export const getAllClasses_for_admin= (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getAllClass().then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_CALSS,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_CLASS,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const saveClass_for_admin= (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        saveClassForAdmin(data).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_CALSS,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_CLASS,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const getAllSubject_for_admin= (dataNew) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getAllSubject(dataNew).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_SUBJECT,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_SUBJECT,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const saveSubject_for_admin= (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        saveSubjectForAdmin(data).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_SUBJECT,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_SUBJECT,
                payload: { err }
            })
            reject(err)
        })
    })
}

export const getAllChapter_for_admin= (dataNew) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getAllChapter(dataNew).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_CHAPTER,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_CHAPTER,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const saveChapter_for_admin= (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        saveChapterForAdmin(data).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_CHAPTER,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_CHAPTER,
                payload: { err }
            })
            reject(err)
        })
    })
}


export const getAllTopic_for_admin= (dataNew) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getAllTopic(dataNew).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_TOPIC,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_TOPIC,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const saveTopic_for_admin= (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        saveTopicForAdmin(data).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_TOPIC,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_TOPIC,
                payload: { err }
            })
            reject(err)
        })
    })
}


export const getAllVideo_for_admin= (dataNew) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getAllVideo(dataNew).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_VIDEO,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_VIDEO,
                payload: { err }
            })
            reject(err)
        })
    })
}
export const saveVideo_for_admin= (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        saveVideocForAdmin(data).then((res) => {
            let data = lodash.get(res.data, "data", null);
            dispatch({
                type: SUCCESS_ADD_VIDEO,
                payload: data
            })
            resolve(data);
        }).catch((err) => {
            dispatch({
                type: FAIL_ADD_VIDEO,
                payload: { err }
            })
            reject(err)
        })
    })
}