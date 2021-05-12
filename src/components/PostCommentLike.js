import ReactDOM from "react-dom";
import  { useEffect, useState } from 'react';


const PostCommentLike = ({likeId}) => {

    
    let likeUrl;
    const [likeData, setLikeData] = useState([]); 

    if (likeId){
    likeUrl =
    `https://forum-api-jkrop.ondigitalocean.app/category/${likeId}/thread`;
    }


    useEffect(() => {
        if (likeUrl) {
            fetch(likeUrl)
                .then(res => res.json())
                .then((data) => setLikeData(data)); 
        }        
    }, [ likeUrl ]);

    if (!likeId) {

        return <p><strong>Inga likes</strong></p>

    } else {

    return (
    <> 
        {
            likeData.map(like => 
        <div key={like._id}>
            <strong>{like.likes.length}</strong>
        
        </div>)
        } 
    </>
    );
    }
};

export default PostCommentLike;
