import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const categories = {
    'Vego': '60828412282ecd001e7dd309',
    'Fisk': '608284a6282ecd001e7dd30c',
    'Kött': '60828441282ecd001e7dd30b'
    }


const GetThread = ({category}) => {

const categoryId = categories[category];
const categoryUrl =
`https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`;

const [categoryData, setCategoryData] = useState([]); 
const params = useParams();


useEffect(() => {
        if (categoryData.length === 0) {
            fetch(categoryUrl)
                .then(res => res.json())
                .then((title) => setCategoryData(title.value)); 
        }
    });

//Page content 
if (!categoryId) {
    return <h1>Kategorin hittades inte</h1>
} else {
return (

        <div>

            <h1>{params.category}</h1>

                <ul> 

                    {
                    categoryData.map(recipe => 
                    <li key={recipe._id} >
                        <strong>{recipe.title}</strong>
                        <div>{recipe.content}</div>
                    </li>)
                    } 
                </ul>
        </div>
)};

};
export default GetThread;