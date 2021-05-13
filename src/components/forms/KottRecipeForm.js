import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import './style/form.css';
import meat from '../Ikoner/meat.png';
import { Form } from 'react-bootstrap';

const KottRecipeForm = () => {
    const url = "https://forum-api-jkrop.ondigitalocean.app/category/60828441282ecd001e7dd30b/thread";
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
        <h2 className="title-category">Kött</h2>
        <Form onSubmit={(e) => submit(e)}>
            <div class="mb-3">
                <div className="content-title">
                    <input onChange={(e) => handle(e)} className="form-control" id="title" value={data.title} placeholder="Rubrik" type='text'></input>
                </div>
            </div>
            <div class="mb-3">
                <textarea onChange={(e) => handle(e)} className="form-control" id="content" rows="3" value={data.content} placeholder="Skriv ditt recept här." type='text' />
            </div>
            <div className="buttonPlace">
            <button className="buttonForm">Publicera</button>
            </div>
            <div className="meat-box">
                <div className="icon-meat">
                    <img src={meat} alt="meat" />
                </div>
            </div>
        </Form>
    </div>

}

export default KottRecipeForm;
