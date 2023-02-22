import axios from 'axios';

export function EditPost(event){
    // const navigate = useNavigate();

    let preText =event.target.parentElement.querySelector('#content').innerText;
    let text = prompt("content", preText);

    if(!text){
        return;
    }

    console.log('target');
    const target  = event.target.parentElement;
    console.log(target);

    axios.post('/api/edit',{
        params:{
            "objectId" : target.className,
            "text": text
        }
    })
    .then(response => {
        console.log(response);
        if(response.data.editSuccess){
            window.location.replace("/home")
        }
        else{
            alert('cannot edit');
        }
    }); 


}