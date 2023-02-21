
//입력값이 아니라 데이터에서 가져와서 넣어야 
export function savePost(dataToSubmit){

    const prePost = document.querySelectorAll("#post");
    if(prePost!==null){
        // console.log('prePost');
        // console.log(prePost);      
        prePost.forEach(e => e.remove());
    }
    
    const ul = document.querySelector('ul');

    // console.log('dataToSubmit');
    // console.log(dataToSubmit);

    dataToSubmit.forEach(function(value){
        // console.log('foreach문 안');
        // console.log(value.title);
        // console.log(value.content);

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const titleText = document.createElement('span');
        const contentText = document.createElement('p');

        titleText.innerText= value.title;
        contentText.innerText = value.content;

        deleteBtn.innerText = '삭제';
        // deleteBtn.addEventListener('click',delItem);

        editBtn.innerText = '수정';
        
        // console.log(titleText);
        // console.log(contentText);

        li.id = "post";
        li.appendChild(titleText);
        li.appendChild(contentText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);

    });
}
