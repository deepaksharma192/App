import {
  SUCCESS_ADD_CALSS,
  FAIL_ADD_CLASS,
  SUCCESS_ADD_SUBJECT,
  FAIL_ADD_SUBJECT,
  SUCCESS_ADD_CHAPTER,
  FAIL_ADD_CHAPTER,
  SUCCESS_ADD_TOPIC,
  FAIL_ADD_TOPIC,
  SUCCESS_ADD_VIDEO,
  FAIL_ADD_VIDEO
} from '../action/addClassAction'

const initialState = {
  classes_data: "",
  subjects_data: "",
  chapter_data: "",
  topic_data: "",
  video_data: "",
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_ADD_CALSS:
      return {
        ...state,
        classes_data: action.payload,
        loading: false
      }
    case FAIL_ADD_CLASS:
      return {
        ...state,
        classes_data: '',
        loading: false,
        error: action.payloada
      }
    case SUCCESS_ADD_SUBJECT:
      return {
        ...state,
        subjects_data: action.payload,
        loading: false
      }
    case FAIL_ADD_SUBJECT:
      return {
        ...state,
        subjects_data: '',
        loading: false,
        error: action.payloada
      }
    case SUCCESS_ADD_CHAPTER:
      return {
        ...state,
        chapter_data: action.payload,
        loading: false
      }
    case FAIL_ADD_CHAPTER:
      return {
        ...state,
        chapter_data: '',
        loading: false,
        error: action.payloada
      }
    case SUCCESS_ADD_TOPIC:
      return {
        ...state,
        topic_data: action.payload,
        loading: false
      }
    case FAIL_ADD_TOPIC:
      return {
        ...state,
        topic_data: '',
        loading: false,
        error: action.payloada
      }
    case SUCCESS_ADD_VIDEO:
      return {
        ...state,
        video_data: action.payload,
        loading: false
      }
    case FAIL_ADD_VIDEO:
      return {
        ...state,
        video_data: '',
        loading: false,
        error: action.payloada
      }
    default:
      return state
  }
}