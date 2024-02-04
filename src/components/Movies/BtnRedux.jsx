import { useDispatch } from "react-redux";

const BtnRedux = ({ action, item, children }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: action,
      payload: item,
    });
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default BtnRedux;

{/* <button onClick={() => AddFavHandler(item)}>favorite</button> */        }