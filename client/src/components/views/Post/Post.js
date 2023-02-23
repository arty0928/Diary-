import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {postContent} from '../../../_actions/action';

function Post() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    const onTtileHandler=(event)=>{
        setTitle(event.currentTarget.value);
    }

    const onContentHandler = (event)=>{
        setContent(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(title==="" || content===""){
            return alert('내용을 입력해주세요');
        }
        let body={
            title: title,
            content: content
        }

        dispatch(postContent(body))
        .then(response => {
            console.log(response);
            if(response.payload.postSuccess){
                // savePost(response.payload.posts);
                navigate('/home');
            }else{
                alert('Error ff');
            }

        })
    }

return (
    <div>

<div className="mt-10 sm:mt-0">
  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={onSubmitHandler}>
        <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">

                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-50 px-3 text-sm text-gray-500">TITLE</span>
                                <input type="text" name="company-website" id="company-website" className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={title} onChange={onTtileHandler}/>
                                </div>
                            </div>
                        </div>

                        <div>
                        <label for="about" className="block text-sm font-medium text-gray-700">Content</label>
                        <div className="mt-1">
                            <textarea id="about" value={content}  onChange={onContentHandler} name="about" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Content"></textarea>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div className="hidden sm:block" aria-hidden="true">
  <div className="py-5">
    <div className="border-t border-gray-200"></div>
  </div>
</div>
    </div>
)
}

export default Post;
