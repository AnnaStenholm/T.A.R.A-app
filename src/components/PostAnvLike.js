
import { useState } from 'react';
import Axios from 'axios';

const PostAnvLike = () => {
    
    let url;
    url = `https://forum-api-jkrop.ondigitalocean.app/thread/609cea90e747d9001deea510/like`;
    
    const [data, setData] = useState({})

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
        })
            .then(res => {
                console.log(res.data)
            })
     // Here's where the reload happens! Det gör det inte!
            .catch(res => {
            console.log(res.data)
            })
        
    }

    
     
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
        

    }
    
  

 

    return <> 
            <form onSubmit={ (e) => submit(e)}>
            
            <button className="btn btn-outline-dark"
            style={{ float:'left', marginRight: '20px', fontSize: '1.5em'}}
            onClick={(e) => handle(e)}>
            <i className="fas fa-thumbs-up" onClick={(e) => handle(e)} > </i>
            </button>

            </form>
    </>
}

export default PostAnvLike;
