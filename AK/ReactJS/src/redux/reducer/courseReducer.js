import {
    BEGIN,
    SUCCESS,
    FAIL,
    UPDATE,
    SUCCESS_CLASSES
  } from '../action/courseAction'
  
  const initialState = {
    course:"",
    course_data: "",
    classes_data: "",
    loading: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case BEGIN:
        return {
          ...state,
          loading: true
        }
      case SUCCESS:
        return {
          ...state,
          course: action.payload,
          loading: false
        }
        case SUCCESS_CLASSES:
          return {
            ...state,
            classes_data: action.payload,
            loading: false
          }
        case UPDATE:
        return {
          ...state,
          course_data: action.payload,
          loading: false
        }
      case FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload.error.response.data
        }
      default:
        return state
    }
  }