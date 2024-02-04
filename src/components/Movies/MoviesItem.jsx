import { Link } from "react-router-dom";
import BtnRedux from "./BtnRedux";

const Moviesitem = ({item}) => {

    
    return ( 
        <div className="movies-card">
            <img src={item.Poster} alt="Poster" />
            <h2>Title : {item.Title}</h2>
            <p>Year : {item.Year}</p>
            <Link to={`/${item.imdbID}`}>More Info</Link> 
            <BtnRedux action='ADD_FAV' item={item.Title} >Favorite</BtnRedux>
        </div>
     );
}
 
export default Moviesitem;