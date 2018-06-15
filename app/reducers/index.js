import {combineReducers} from 'redux';
import setting from './settings';
import myself from './requestMyself';
import issues from './requestIssues';
import spaceInfo from './requestSpaceInfo';
import userInfo from './userInfo';

export default combineReducers({
    setting,
    myself,
    issues,
    spaceInfo,
    userInfo,
});
