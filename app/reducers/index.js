import {combineReducers} from 'redux';
import setting from './settings';
import myself from './requestMyself';
import issues from './requestIssues';
import spaceInfo from './spaceInfo';
import userInfo from './userInfo';
import projects from './projects';
import {selectedProject} from './projects';

export default combineReducers({
    setting,
    myself,
    issues,
    spaceInfo,
    userInfo,
    projects,
    selectedProject
});
