import {combineReducers} from 'redux'
import token from './tokenReducer'
import user from './userDetailsReducer'
import course from './courseReducer'
import bookmark from './bookmarkReducer'
import videoNote from './videoNoteReducer'
import announcement from './announcementReducer'
import addClass from './addClassReducer';

export default combineReducers({
  token,
  user,
  course,
  bookmark,
  videoNote,
  announcement,
  addClass
})