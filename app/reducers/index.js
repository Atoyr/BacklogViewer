import {combineReducers} from 'redux';
import setting from './settings';
import myself from './requestMyself';
import issues from './requestIssues';

export default combineReducers({
    setting,
    myself,
    issues,
});
