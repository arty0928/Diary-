import axios from 'axios';
import { POST_CONTENT,AUTH_POST } from './types';

export function postContent(dataToSubmit){
    console.log('acion 시작');
    // const request = axios.post('/api/user/login',dataToSubmit)
    const request = axios.post('/api/post',dataToSubmit)
        .then(response => response.data);
        
    return {
        type: POST_CONTENT,
        payload: request
    }
}

export function auth(){
    console.log('post_save_action 시작');

    const request = axios.get('/api/auth')
        .then(response =>response.data);

        console.log('savepost_request-------------------');
        console.log(request)
    //return해서 reducer에 넘겨줘야
    //reducer: pre와 next action을 조합해서 다음 state을 만들어야 
    return {
        type: AUTH_POST,
        payload: request
    }
}