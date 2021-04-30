import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';

const CommentForm = () => {
    const url =`https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/comment`;
    
    const [data, setData] = useState({
        content: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            content: data.content
        })
        .then(res=>{console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] =e.target.value
        setData(newdata)
        console.log(newdata)
    }
    

  return <div>
      <h3>Kommentarer</h3>
            <form onSubmit={(e)=> submit(e)}>
                <div>
                <input onChange={(e)=>handle(e)} id="content" value={data.content} placeholder="Lämna kommentar" type='text' />
                </div>
                <button>Publicera</button>
            </form>
        </div>

}

export default CommentForm;


