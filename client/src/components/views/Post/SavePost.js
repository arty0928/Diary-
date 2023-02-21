import { DeletePost } from './DeletePost';


//입력값이 아니라 데이터에서 가져와서 넣어야 
export function SavePost(dataToSubmit){

    const prePost = document.querySelectorAll("#post");
    if(prePost!==null){    
        prePost.forEach(e => e.remove());
    }
    
    const ul = document.querySelector('ul');

    dataToSubmit.forEach(function(value){

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const titleText = document.createElement('span');
        const contentText = document.createElement('p');
        const number = document.createElement('p');

        titleText.innerText= value.title;
        contentText.innerText = value.content;
        number.id='number';

        deleteBtn.innerText = '삭제';
        deleteBtn.addEventListener('click',DeletePost);

        editBtn.innerText = '수정';
        li.id = "post";
        li.className = value._id;
        li.appendChild(titleText);
        li.appendChild(contentText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);

    });
}
