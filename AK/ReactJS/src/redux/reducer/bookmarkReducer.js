import {
  BEGIN,
  SUCCESS,
  FAIL,
  UPDATE,
  TOPIC_VIDEO,
  VIDEO_TIME,
  TAB,
  NEW_BOOKMARK,
} from '../action/bookmarkAction'

const initialState = {
  bookmark_data: '',
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
        bookmark_data: action.payload,
        loading: false
      }
    case UPDATE:
      return {
        ...state,
        bookmark_data: action.payload,
        loading: false
      }
    case TOPIC_VIDEO:
      let tepObj1 = {
        ...state.bookmark_data,
        currentTopic: action.payload.topic_id,
        currentVideo: action.payload._id
      }
      return {
        ...state,
        bookmark_data: tepObj1,
        loading: false
      }
    case VIDEO_TIME:
      let data = action.payload;
      let videoTime = state.bookmark_data.videoTime;
      videoTime[data.vid] = data.ctime;
      let tepObj2 = {
        ...state.bookmark_data,
        videoTime: videoTime
      }
      return {
        ...state,
        bookmark_data: tepObj2,
        loading: false
      }
    case TAB:
      let tepObj3 = {
        ...state.bookmark_data,
        currentTab: action.payload
      }
      return {
        ...state,
        bookmark_data: tepObj3,
        loading: false
      }
      case NEW_BOOKMARK:
        return {
          ...state,
          bookmark_data: action.payload,
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