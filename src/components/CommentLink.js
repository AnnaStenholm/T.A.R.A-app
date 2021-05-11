import React from 'react';
import {  Link  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //6.4K (gzipped: 2.7K)
import { faComments } from '@fortawesome/free-solid-svg-icons'; //945 (gzipped: 586)
import { Container, Row, Col } from 'react-bootstrap'; //3.1K (gzipped: 1.3K)

const CommentLink = ({recipeId}) => {

return <>
<Link to={`/recept/${recipeId}/kommentarer`} style={{color: '#304227'}}>
<FontAwesomeIcon 
icon={ faComments } style={{ float:'left', fontSize: '2em', marginTop: '0px'}}>
</FontAwesomeIcon>
</Link>
</>
};

export default CommentLink;