
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //6.4K (gzipped: 2.7K)
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; //945 (gzipped: 586)
import { Container, Row, Col } from 'react-bootstrap'; //3.1K (gzipped: 1.3K)
const PostLike = ({likeId}) => {
    const likeUrl =
    `https://forum-api-jkrop.ondigitalocean.app/thread/${likeId}/like`;
    
    const [likeData, setLikeData] = useState({
        _id: "" 
    }); 
    
    function submit(e) {
        e.preventDefault();
        Axios.post(likeUrl)
            .then(res => {
                console.log(res.data)
            })
    };

 

    return <>      
            <FontAwesomeIcon icon={ faThumbsUp } onSubmit={(e) => submit(e)} style={{ color: '#304227', float:'left', marginRight: '20px', fontSize: '2em'}}></FontAwesomeIcon>
    </>
}

export default PostLike;
