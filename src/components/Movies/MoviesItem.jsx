import { Link } from "react-router-dom";

const Moviesitem = ({item}) => {
    
    return ( 
        <div className="movies-card">
            <img src={item.Poster} alt="Poster" />
            <h2>Title : {item.Title}</h2>
            <p>Year : {item.Year}</p>
            <Link to={`/${item.imdbID}`}>More Info</Link>  
        </div>
     );
}
 
export default Moviesitem;