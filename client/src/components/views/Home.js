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
      <ul>

        <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
        </header>

        <main>
          <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
              <div class="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
            </div>
          </div>
        </main>

      </ul>
    </div>
  )
}

export default Home;
