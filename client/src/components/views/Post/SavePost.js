import { DeletePost } from './DeletePost';
import { EditPost } from './EditPost';

//입력값이 아니라 데이터에서 가져와서 넣어야 
export function SavePost(dataToSubmit){

    const prePost = document.querySelectorAll("#post");
    if(prePost!==null){    
        prePost.forEach(e => e.remove());
    }

    const posthere = document.querySelector('#posthere');

    let i =0;

    dataToSubmit.forEach(function(value){


        const td = document.createElement('tr');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const number = document.createElement('td');

        const titleText = document.createElement('td');
        titleText.id = "title";

        const contentText = document.createElement('td');
        contentText.id = "content";

        titleText.innerText= value.title;
        contentText.innerText = value.content;
        number.innerText = i++;
        number.id='number';

        //delete Button
        const deleteBtnTd = document.createElement('td');
        deleteBtn.innerText = '삭제';
        deleteBtn.id = 'deleteBtn';
        deleteBtn.addEventListener('click',DeletePost);

        //edit Button
        const editBtnTd = document.createElement('td');
        editBtn.innerText = '수정';
        editBtn.id = 'editBtn';
        editBtn.addEventListener('click',EditPost);
        editBtn.className="btn-link";

        td.id = "post";
        td.className = value._id;
        td.appendChild(number);
        td.appendChild(titleText);
        td.appendChild(contentText);

        editBtnTd.appendChild(editBtn);
        td.appendChild(editBtnTd);

        deleteBtnTd.appendChild(deleteBtn);
        td.appendChild(deleteBtnTd);
        posthere.appendChild(td);
        
        // return(
        //     <table id="post" class={value._id}>
        //         <p id="number"></p>
        //         <span id="title">${value.title}</span>
        //         <span id="content">${value.content}</span>
        //         <button id="editBtn" onClick={EditPost}>✎</button>
        //         <button id="deleteBtn" onClick={DeletePost}>X</button>
        //     </table>
        // )
        
    });
}
