import {
    POST_DETAILS_BEGIN,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAIL,
    INSERT_DETAILS_SUCCESS,
    INSERT_DETAILS_FAIL
  } from '../action/userDetailsAction'
  
  const initialState = {
    user_details: "",
    details_loading: false,
    error: {},
    insert_details_error: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case POST_DETAILS_BEGIN:
        return {
          ...state,
          details_loading: true,
          error: {}
        }
      case POST_DETAILS_SUCCESS:
        return {
          ...state,
          user_details: action.payload,
          details_loading: false
        }
      case POST_DETAILS_FAIL:
        return {
          ...state,
          details_loading: false,
          error: action.payload.error.response.data
        }
      case INSERT_DETAILS_SUCCESS:
        return {
          ...state,
          user_details: action.payload,
          insert_details_error: false
        }
      case INSERT_DETAILS_FAIL:
        return {
          ...state,
          insert_details_error: true
        }
      default:
        return state
    }
  }