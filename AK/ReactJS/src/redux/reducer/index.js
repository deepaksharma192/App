import {combineReducers} from 'redux'
import token from './tokenReducer'
import user from './userDetailsReducer'
import course from './courseReducer'
import bookmark from './bookmarkReducer'
import videoNote from './videoNoteReducer'
import announcement from './announcementReducer'

export default combineReducers({
  token,
  user,
  course,
  bookmark,
  videoNote,
  announcement
})