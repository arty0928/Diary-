import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {postContent} from '../../../_actions/action';
import { savePost } from './SavePost';

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
        <form onSubmit={onSubmitHandler}>
            <label>title</label>
                <input type="text" value={title} onChange={onTtileHandler}/>
            <button type="submit" >
                등록
            </button>
            <br />
            <label>content</label>
                <input type="text" value={content}  onChange={onContentHandler} />
        </form>
    </div>
)
}

export default Post;
