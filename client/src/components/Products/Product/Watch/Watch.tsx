import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/hooks/redux-hook";
import cls from "./Watch.module.scss";
import { addToCart, removeFromCart } from "../../../../redux/slices/cartSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Watch = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((cart) => cart.cart.cart);
  const isInCart = cart.find((el) => el._id === product._id);
  return isInCart ? (
    <div
      className={cls.watch}
      onClick={() => dispatch(removeFromCart(product._id))}
    >
      <FavoriteIcon />
      <p>Watch</p>
    </div>
  ) : (
    <div className={cls.watch} onClick={() => dispatch(addToCart(product))}>
      <FavoriteBorderIcon />
      <p>Watch</p>
    </div>
  );
};

export default Watch;
