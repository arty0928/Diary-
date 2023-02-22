import axios from 'axios';

export function EditPost(event){
    // const navigate = useNavigate();
    let preText =event.target.parentElement.querySelector('#content').innerText;
    let text = prompt("content", preText);

    if(!text){
        return;
    }

    const target  = event.target.parentElement;

    // console.log(target.className); //63f58df7c24c7eeffb71f581 (DB ObjectId)
    axios.post('/api/edit',{
        params: {
            objectId : target.className,
            text: text
        }
    })
    .then(response => {
        console.log(response);
        // console.log(response.data.delSuccess);
        if(response.data.delSuccess){
            // navigate('/home');
            // return <Navigate to="/home" />;
            window.location.replace("/home")
        }
        else{
            alert('cannot edit');
        }
    }); 


}