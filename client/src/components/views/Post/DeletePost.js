import axios from 'axios';

export function DeletePost(event){
    // const navigate = useNavigate();

    const target  = event.target.parentElement;

    axios.post('/api/delete',target.className)
    .then(response => {
        console.log(response.data.delSuccess);
        if(response.data.delSuccess){
            // navigate('/home');
            // return <Navigate to="/home" />;
            window.location.replace("/home")
        }
            
        else{
            alert('cannot delete');
        }
    }); 
}