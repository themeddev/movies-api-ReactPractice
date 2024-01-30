import { Link, useParams } from "react-router-dom";

const PostDetail = ({filtredPosts}) => {
    
    const detail_id = useParams()
    const index = filtredPosts.findIndex(post => post.id = detail_id)


    
    return ( 
        <div className="card">
            <img className="card-img-top" src={filtredPosts[index].thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{filtredPosts[index].slug}</h5>
                <p className="card-text">{filtredPosts[index].content}</p>
                <Link to='/' >View Posts</Link>
            </div>
        </div>
     );
}
 
export default PostDetail;