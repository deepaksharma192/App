import {
    BEGIN,
    SUCCESS,
    FAIL
  } from '../action/announcementAction'
  
  const initialState = {
    announcement_data: '',
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
            announcement_data: action.payload,
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