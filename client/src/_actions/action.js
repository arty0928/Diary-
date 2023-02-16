import axios from 'axios';
import { POST_CONTENT } from './types';

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