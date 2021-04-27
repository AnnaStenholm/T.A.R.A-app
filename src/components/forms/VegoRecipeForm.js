import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';

const VegoRecipeForm = () => {
    const url ="https://forum-api-jkrop.ondigitalocean.app/category/60828412282ecd001e7dd309/thread";
    const [data, setData] = useState({
        title: "", 
        content: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            title: data.title,
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
        <h1>Vego</h1>
        <form onSubmit={(e)=> submit(e)}>
                <div>
                <input onChange={(e)=>handle(e)} id="title" value={data.title} placeholder="Rubrik" type='text'></input>
                </div>
                <div>
                <textarea onChange={(e)=>handle(e)} id="content" value={data.content} placeholder="Skriv ditt recept här." type='text' />
                </div>
                <button>Publicera</button>
            </form>
        </div>

}

export default VegoRecipeForm;