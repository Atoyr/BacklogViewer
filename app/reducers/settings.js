import { handleActions } from 'redux-actions'

const initialState = {
    setting: {
    url: 'boo',
    apiKey: 'foo'}
}

export default handleActions({
    SAVE_SETTING:(state,action) =>{
        return Object.assign({}, state, {
        setting:{
            url: action.payload.setting.url,
            apiKey: action.payload.setting.apiKey  }
        })},
    LOAD_SETTING:(state,action) => {
        return Object.assign({}, state, {
            setting:{
                url: action.payload.setting.url,
                apiKey: action.payload.setting.apiKey  }
        })},        
},initialState);