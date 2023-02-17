import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {postContent} from '../../../_actions/action';

function Post() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ul = document.querySelector('ul');

    //posting한 content를 home화면에 보이게 하기
    const savePostingContent=(dataToSubmit)=>{

        console.log('dataToSubmit');
        console.log(dataToSubmit.title);
        console.log(dataToSubmit.content);

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const titleText = document.createElement('span');
        const contentText = document.createElement('p');

        titleText.innerText= dataToSubmit.title;
        contentText.innerText = dataToSubmit.content;

        deleteBtn.innerText = '삭제';
        // deleteBtn.addEventListener('click',delItem);

        editBtn.innerText = '수정';
        
        console.log(titleText);
        console.log(contentText);

        li.appendChild(titleText);
        li.appendChild(contentText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        // li.id = todo.id;
    }

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
                //console.log(body);
                savePostingContent(body);
                navigate('/');
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
