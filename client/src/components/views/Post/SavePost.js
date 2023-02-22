import { DeletePost } from './DeletePost';
import { EditPost } from './EditPost';

//입력값이 아니라 데이터에서 가져와서 넣어야 
export function SavePost(dataToSubmit){

    const prePost = document.querySelectorAll("#post");
    if(prePost!==null){    
        prePost.forEach(e => e.remove());
    }
    console.log('savepost-----1');
    
    const ul = document.querySelector('ul');

    console.log('savepost----2');

    dataToSubmit.forEach(function(value){

        const div = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const titleText = document.createElement('span');
        titleText.id = "title";
        const contentText = document.createElement('p');
        contentText.id = "content";
        const number = document.createElement('p');

        titleText.innerText= value.title;
        contentText.innerText = value.content;
        number.id='number';

        deleteBtn.innerText = 'X';
        deleteBtn.addEventListener('click',DeletePost);

        editBtn.innerText = '✎';
        editBtn.addEventListener('click',EditPost);

        div.id = "post";
        div.className = value._id;
        div.appendChild(titleText);
        div.appendChild(contentText);
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        ul.appendChild(div);
    });
}
