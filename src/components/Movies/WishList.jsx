import { useSelector } from "react-redux";
import MoviesItem from "./MoviesItem"; // Corrected import statement

const WishList = () => {
  const { movies } = useSelector(state => state.wishlist); // Corrected variable name

  return ( 
    <div className="all">
      {
        movies.length > 0 ? 
          movies.map((item, index) => <MoviesItem item={item} key={index} />) 
          : "No Favorite Movie!" // Corrected mapping and condition
      }
    </div>
  );
}

export default WishList;
