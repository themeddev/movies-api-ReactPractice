import Moviesitem from "./MoviesItem";
import SideBar from "./SideBar";

const MoviesList = ({handelChange, handelSearch, movies}) => {

    
    return ( 
    <>
    
    <SideBar> 
    <form onSubmit={(e) => handelSearch(e)}>
      
      <h2>Movies:</h2>

      <div className="mb-3 row">
        
        <input type="text" className="form-control m-2 col" id="title" name="title" placeholder="Enter title" onChange={handelChange} />

        <input type="text" className="form-control m-2 col" id="year" name="year" placeholder="Enter year" onChange={handelChange} />

        <select className="form-select m-2 col" id="type" name="type" onChange={handelChange}>
          <option value="">Select</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary col">Search</button>
    
    </form>

    <div className="all">
        {
        movies ? movies.map
        (
            (item , index ) => <Moviesitem item={item} key={index} />
        ):  "No Movie Found"
        }
    </div>
    </SideBar>



    </>

     );
}
 
export default MoviesList;