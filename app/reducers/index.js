import {combineReducers} from 'redux';
import setting from './settings';
import myself from './requestMyself';
import issues from './requestIssues';
import spaceInfo from './spaceInfo';
import userInfo from './userInfo';

export default combineReducers({
    setting,
    myself,
    issues,
    spaceInfo,
    userInfo,
});
