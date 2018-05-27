import {createStore} from 'redux';
import settingApp from '../reducers';

let store = createStore(settingApp);

export default store;