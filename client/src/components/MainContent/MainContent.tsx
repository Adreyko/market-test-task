import { useEffect } from "react";
import Filters from "../Filters/Filters";
import Products from "../Products/Products";
import cls from "./MainContent.module.scss";
import { fetchProducts } from "../../redux/slices/thunk/productThunk";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux-hook";

const MainContent = () => {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((el) => el.sortBy.sortBy);
  const searchType = useAppSelector((el) => el.search.search);
  const ratingType = useAppSelector((el) => el.rating.rating);
  const rangePrices = useAppSelector((el) => el.rangePrice.range);
  useEffect(() => {
    dispatch(fetchProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, searchType, ratingType,rangePrices]);

  return (
    <div className={cls.products}>
      <Filters />
      <Products />
    </div>
  );
};

export default MainContent;
