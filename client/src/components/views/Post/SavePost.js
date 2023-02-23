import { DeletePost } from './DeletePost';
import { EditPost } from './EditPost';

// function SavePostForm(dataToSubmit){
    
//     dataToSubmit.forEach(function(value){
//         // const div = document.createElement('div');
//         // const deleteBtn = document.createElement('button');
//         // const editBtn = document.createElement('button');
//         // const titleText = document.createElement('span');
//         // titleText.id = "title";
//         // const contentText = document.createElement('p');
//         // contentText.id = "content";
//         // const number = document.createElement('p');

//         // titleText.innerText= value.title;
//         // contentText.innerText = value.content;
//         // number.id='number';

//         // deleteBtn.innerText = 'X';
//         // deleteBtn.addEventListener('click',DeletePost);

//         // editBtn.innerText = '✎';
//         // editBtn.addEventListener('click',EditPost);

//         // div.id = "post";
//         // div.className = value._id;
//         // div.appendChild(titleText);
//         // div.appendChild(contentText);
//         // div.appendChild(editBtn);
//         // div.appendChild(deleteBtn);
//         // posthere.appendChild(div);
        
//         return(
//             <div id="post" class={value._id}>
//                 <p id="number"></p>
//                 <span id="title">${value.title}</span>
//                 <span id="content">${value.content}</span>
//                 <button id="editBtn" onClick={EditPost}>✎</button>
//                 <button id="deleteBtn" onClick={DeletePost}>X</button>
//             </div>
//         )
        
//     });
// }

//입력값이 아니라 데이터에서 가져와서 넣어야 
export function SavePost(dataToSubmit){

    console.log('savepost-----0');

    const prePost = document.querySelectorAll("#post");
    if(prePost!==null){    
        prePost.forEach(e => e.remove());
    }

    console.log('savepost-----1');
    
    const posthere = document.querySelector('#posthere');

    console.log('savepost----2');
    let i =0;

    dataToSubmit.forEach(function(value){


        const td = document.createElement('tr');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');

        const titleText = document.createElement('td');
        titleText.id = "title";

        const contentText = document.createElement('td');
        contentText.id = "content";
        const number = document.createElement('td');

        titleText.innerText= value.title;
        contentText.innerText = value.content;
        number.innerText = i++;
        number.id='number';

        deleteBtn.innerText = 'X';
        deleteBtn.addEventListener('click',DeletePost);

        editBtn.innerText = '✎';
        editBtn.addEventListener('click',EditPost);

        td.id = "post";
        td.className = value._id;
        td.appendChild(number);
        td.appendChild(titleText);
        td.appendChild(contentText);
        td.appendChild(editBtn);
        td.appendChild(deleteBtn);
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
