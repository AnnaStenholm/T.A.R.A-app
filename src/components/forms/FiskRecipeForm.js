import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import './style/form.css';
import fish from '../Ikoner/fish.png';

const FiskRecipeForm = () => {
    const url = "https://forum-api-jkrop.ondigitalocean.app/category/608284a6282ecd001e7dd30c/thread";
    const [data, setData] = useState({
        title: "",
        content: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            title: data.title,
            content: data.content
        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }


    return <div>
        <h2 className="title-category">Fisk</h2>
        <form onSubmit={(e) => submit(e)}>
            <div className="content-title">
                <input onChange={(e) => handle(e)} id="title" value={data.title} placeholder="Rubrik" type='text'></input>
            </div>
            <div className="content-recipe">
                <textarea onChange={(e) => handle(e)} id="content" value={data.content} placeholder="Skriv ditt recept här." type='text' />
            </div>
            <button>Publicera</button>
            <div className="fish-box">
                <div className="icon-fish">
                    <img src={fish} alt="fish"/>
                </div>
            </div>
        </form>
    </div>

}

export default FiskRecipeForm;
