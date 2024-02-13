import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
// Actions
import { addMovie } from "../../redux/WishlistSlice";

const MoviesItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addMovie(item));
  };




  return (
    <div className="movies-card">
      <img src={item.Poster} alt={`Photo of ${item.Title}`} />
      <h2>Title: {item.Title}</h2>
      <p>Year: {item.Year}</p>
      <Link to={`/${item.imdbID}`}>More Info</Link>

        <button onClick={handleAddToWishlist} className="p-0 bg-white">
          <CiHeart size={30} color='green' />
        </button>
    </div>
  );
};

export default MoviesItem;
