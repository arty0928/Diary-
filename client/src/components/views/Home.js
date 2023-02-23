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
      <div>

        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
        </header>

    <div className ='w3-container'>
      <table id="posthere" className='w3-table'>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>content</th>
          <th>eidt</th>
          <th>delete</th>
        </tr>
      </table>
    </div>
        
      
      </div>
    </div>
  )
}

export default Home;
