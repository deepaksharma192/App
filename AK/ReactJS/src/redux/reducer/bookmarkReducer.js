import {
  BEGIN,
  SUCCESS,
  FAIL,
  UPDATE,
  TOPIC_VIDEO,
  VIDEO_TIME,
  TAB,
  NEW_BOOKMARK,
  VIDEO_COMPLETE,
  VIDEO_COMPLETION
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
      if (videoTime.hasOwnProperty(data.vid)) {
        videoTime[data.vid] = { ...videoTime[data.vid], time: data.ctime };
      } else {
        videoTime[data.vid] = { time: 0, complete: false }
      }
      let tepObj2 = {
        ...state.bookmark_data,
        videoTime: videoTime
      }
      return {
        ...state,
        bookmark_data: tepObj2,
        loading: false
      }
    case VIDEO_COMPLETE:
      let data1 = action.payload;
      let videoTime1 = state.bookmark_data.videoTime;
      if (videoTime1.hasOwnProperty(data1.vid)) {
        videoTime1[data1.vid] = { ...videoTime1[data1.vid], complete: data1.complete };
      } else {
        videoTime1[data1.vid] = { time: 0, complete: false }
      }
      let tepObj5 = {
        ...state.bookmark_data,
        videoTime: videoTime1
      }
      return {
        ...state,
        bookmark_data: tepObj5,
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
      case VIDEO_COMPLETION:
        let completion = action.payload;
        let tepObj7= {
          ...state.bookmark_data,
          completion: completion
        }
        return {
          ...state,
          bookmark_data: tepObj7,
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