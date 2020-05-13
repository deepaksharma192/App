import Auth from '../Auth'
import jumpTo from '../Navigation'
import axios from 'axios'

const URL = 'http://localhost:5000'

const serverCall = (config) => {
    if (Auth.user_token) {
        const token = Auth.getToken()
        config.headers = {
            "authorization": token
        }
    }
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        function (error) {
            if (!error.response) { 
                error.response = {
                    data: 'net work error',
                    status: 500
                }
            }
            if (error.response.status === 401) {
                Auth.logout()
                jumpTo('/login')
                throw error
            }
            return Promise.reject(error);
        });
    config.baseURL = URL
    return axios(config)
}
export default serverCall

export const login = (number) => {
    const body =
    {
        "number": number
    }
    return serverCall({
        method: 'POST',
        url: '/users/login',
        data: body
    })
        .then(res => {
            return res
        })
}

export const testimonials = () => {

    return serverCall({
        method: 'get',
        url: '/testimonials/homedata'

    })
        .then(res => {
            return res
        })
}
export const veryfyOtp = (number, otp) => {
    const body =
    {
        "number": number,
        "otp": otp
    }
    return serverCall({
        method: 'POST',
        url: '/users/veryfy-otp',
        data: body
    })
        .then(res => {
            if (res.data.user_token) {
                Auth.setUserToken(res.data.user_token.token);
            }
            return res;
        }).catch(err => {
            return err
        })
}

export const getUserDetails = () => {
    return serverCall({
        method: 'GET',
        url: '/users/user-details'
    })
        .then(res => {
            return res
        })
}

export const updateUserDetails = (form) => {
    return serverCall({
        method: 'PUT',
        url: '/users/update-details',
        data: form
    })
        .then(res => {
            return res
        })
}
export const updateUserDetailsAll = (form) => {
    return serverCall({
        method: 'PUT',
        url: '/users/update-details/all',
        data: form
    })
        .then(res => {
            return res
        })
}
export const getAllCourse = (id) => {
    return serverCall({
        method: 'GET',
        url: '/courses/all'
    })
        .then(res => {
            return res
        })
}


export const getCourseById = (id) => {
    return serverCall({
        method: 'GET',
        url: '/courses/' + id
    })
        .then(res => {
            return res
        })
}
export const getBookmarkByid = (id) => {
    return serverCall({
        method: 'GET',
        url: '/bookmark/' + id
    })
        .then(res => {
            return res
        })
}
export const updaateBookmark = (form) => {
    return serverCall({
        method: 'POST',
        url: '/bookmark/',
        data: form
    })
        .then(res => {
            return res
        })
}
export const createVideoNote = (form) => {
    return serverCall({
        method: 'POST',
        url: '/video-note/',
        data: form
    })
        .then(res => {
            return res
        })
}
export const getVideoNoteByid = (id) => {
    return serverCall({
        method: 'GET',
        url: '/video-note/' + id
    })
        .then(res => {
            return res
        })
}
export const getAnnouncementByid = (ctype) => {
    return serverCall({
        method: 'GET',
        url: '/announcement/' + ctype
    })
        .then(res => {
            return res
        })
}

export const getAllClassesFromServer = () => {
    return serverCall({
        method: 'GET',
        url: '/courses/class/all'
    })
        .then(res => {
            return res
        })
}
export const getAllBookmarkForUser = () => {
    return serverCall({
        method: 'GET',
        url: '/bookmark/all/status'
    })
        .then(res => {
            return res
        })
}
export const getAllClass = () => {
    return serverCall({
        method: 'GET',
        url: '/admin/class'
    })
        .then(res => {
            return res
        })
}
export const saveClassForAdmin = (form) => {
    return serverCall({
        method: 'POST',
        url: '/admin/class/add',
        data:form
    })
        .then(res => {
            return res
        })
}
export const getAllSubject = (form) => {
    return serverCall({
        method: 'POST',
        url: '/admin/subjects',
        data:form
    })
        .then(res => {
            return res
        })
}
export const saveSubjectForAdmin = (form) => {
    return serverCall({
        method: 'POST',
        url: '/admin/subjects/add',
        data:form
    })
        .then(res => {
            return res
        })
}
export const getAllChapter = (form) => {
    return serverCall({
        method: 'POST',
        url: '/admin/chapter',
        data:form
    })
        .then(res => {
            return res
        })
}
export const saveChapterForAdmin = (form) => {
    return serverCall({
        method: 'POST',
        url: '/admin/chapter/add',
        data:form
    })
        .then(res => {
            return res
        })
}
export const getAllTopic = (form) => {
    return serverCall({
        method: 'POST',
        url: '/admin/topic',
        data:form
    })
        .then(res => {
            return res
        })
}
export const saveTopicForAdmin = (form) => {
    return serverCall({
        method: 'POST',
        url: '/admin/topic/add',
        data:form
    })
        .then(res => {
            return res
        })
}
export const getAllVideo = (form) => {
    return serverCall({
        method: 'POST',
        url: '/admin/video',
        data:form
    })
        .then(res => {
            return res
        })
}
export const saveVideocForAdmin = (form) => {
    return serverCall({
        method: 'POST',
        url: '/admin/video/add',
        data:form
    })
        .then(res => {
            return res
        })
}
