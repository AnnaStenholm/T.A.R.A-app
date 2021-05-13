import React from 'react';
import {  Link  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //6.4K (gzipped: 2.7K)
import { faComments } from '@fortawesome/free-solid-svg-icons'; //945 (gzipped: 586)
import { Container, Row, Col } from 'react-bootstrap'; //3.1K (gzipped: 1.3K)

const CommentAnvLink = () => {

return <>
<Link to={`/recept/609cea90e747d9001deea510/kommentarer`} style={{color: '#304227'}}>
<button className="btn btn-outline-dark"
            style={{ float:'left', marginRight: '20px', fontSize: '1.5em'}}>
            <i className="fas fa-comment" > </i>
            </button>
</Link>
</>
};

export default CommentAnvLink;