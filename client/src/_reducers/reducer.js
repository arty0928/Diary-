/* eslint-disable no-unreachable */
import {
    POST_CONTENT
}from '../_actions/types';

    
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action){
    console.log('reducer 시작');
    switch(action.type){
        case POST_CONTENT:
            return {...state, postSuccess: action.payload};
            break;
        default:
            return state;
    }
}