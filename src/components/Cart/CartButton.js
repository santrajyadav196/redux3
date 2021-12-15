import classes from "./CartButton.module.css";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(uiActions.toggle());
      }}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
