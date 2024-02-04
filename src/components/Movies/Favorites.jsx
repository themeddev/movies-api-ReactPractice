import { useSelector } from "react-redux";

const Favorites = () => {
    
    const favorites = useSelector((state) => state.addTofav);

    return ( 
        <p>{favorites}</p>
     );
}
 
export default Favorites;