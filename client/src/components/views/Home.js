/* eslint-disable no-unused-vars */
import React, {useEffect}from 'react';
import { useDispatch } from 'react-redux';
import { SavePost } from './Post/SavePost';
import { auth } from '../../_actions/action';


function Home() {
  const dispatch = useDispatch();
  
  dispatch(auth())
  .then(response => {
    if(response.payload.postSuccess){
      SavePost(response.payload.posts);
    }
  })



  return (
    <div>
      Home
      <ul>

      </ul>
    </div>
  )
}

export default Home;
