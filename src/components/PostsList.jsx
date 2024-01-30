import { useState } from "react";
import PostItem from "./PostItem";

const PostsList = ({posts, filtredPosts, setFiltredPosts}) => {

    const [searchQuery, setSearchQuery] = useState('')

    const handelSearch = (e) => {

        setSearchQuery(e.target.value.toLowerCase());
        
        if (searchQuery  === '' ) {
            setFiltredPosts(posts)
        }else{
            const newPosts = filtredPosts.filter(post => post.slug.toLowerCase().includes(searchQuery))            
            setFiltredPosts(newPosts)
        }

        
    }
    
    return ( 
        <>
        <h1>Posts :</h1> 
        <input placeholder="Search" onChange={(e) => handelSearch(e)}  />
        {
            filtredPosts.map( post => (
                <PostItem post={post} />
            ))
        }
        </>
     );
}
 
export default PostsList;