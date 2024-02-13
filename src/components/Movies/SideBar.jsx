import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../../redux/WishlistSlice";
import { CiBookmarkRemove } from "react-icons/ci";

const SideBar = ({ children }) => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.wishlist);

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeMovie(item));
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-3 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <h3 className="fs-5 d-none d-sm-inline">Wishlist</h3>
            <p>total : {movies.length}</p>
            <hr />
            <div className="">
              <ul>
                {movies.length > 0 ? (
                  movies.map((item) => (
                    <div className="movies-card" key={item.id}>
                      <img src={item.Poster} alt="Poster" />
                      <p className="text-white">{item.Title}</p>
                      <p className="text-white">{item.quantity}</p>
                      <button
                        onClick={() => handleRemoveFromWishlist(item)}
                        className="p-0 bg-white"
                      >
                        <CiBookmarkRemove size={30} color="red" />
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No Favorite Movie!</p>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="col py-3">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
