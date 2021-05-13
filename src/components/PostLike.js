import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //6.4K (gzipped: 2.7K)
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; //945 (gzipped: 586)
import Axios from 'axios';

const PostLike = ({recipeId, numberLikes}) => {
    
    const {id} = useParams();
    if(recipeId == null || recipeId == undefined) { recipeId = id; }
    
    let url;
    url = `https://forum-api-jkrop.ondigitalocean.app/thread/${recipeId}/like`;
    
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

export default PostLike;
