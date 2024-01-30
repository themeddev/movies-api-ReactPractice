import Moviesitem from "./MoviesItem";

const MoviesList = ({handelChange, handelSearch, movies}) => {







    
    return ( 
        <>
        <form onSubmit={(e) => handelSearch(e)}>

        <h2>Movies : </h2>

        <input type="text" name="title" placeholder="title" onChange={handelChange} />
        <input name="year" type="text" placeholder="year" onChange={handelChange} />
        <select name="type" onChange={handelChange} >
            <option>select</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
        </select>


        <button>Search</button>

        </form>
        
        <div className="all">
            {
            movies.length > 0 ? movies.map
            (
                (item , index ) => <Moviesitem item={item} key={index} />
            ):  "No Movie Found"
            }
        </div>


        </>

     );
}
 
export default MoviesList;