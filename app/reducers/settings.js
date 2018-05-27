import {UPDATE_SETTING} from '../actions'

const initialState = {
    url: '',
    apiKey: ''
}

export default function settings(state = initialState, action){
    switch(action.type){
        case UPDATE_SETTING:
            return Object.assign({}, state, {
              url: action.url,
              apiKey: action.apiKey  
            })
        default:
            return state;
    }
}