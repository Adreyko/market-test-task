import { useEffect } from "react";
import Filters from "../Filters/Filters";
import Products from "../Products/Products";
import cls from "./MainContent.module.scss";
import { fetchProducts } from "../../redux/slices/thunk/productThunk";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux-hook";
import { setSortBy } from "../../redux/slices/sortSlice";
import { setRatingProducts } from "../../redux/slices/ratingSlice";
const MainContent = () => {
  const sortType = useAppSelector((sort) => sort.sortBy.sortBy);
  const searchValue = useAppSelector((search) => search.search.search);
  const ratingValue = useAppSelector((rating) => rating.rating.rating);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (searchValue || ratingValue) {
      dispatch(setSortBy(""));
    }
    if (sortType) {
      dispatch(setRatingProducts(0));
    }

    dispatch(fetchProducts());
  }, [sortType, searchValue, ratingValue]);

  return (
    <div className={cls.products}>
      <Filters />
      <Products />
    </div>
  );
};

export default MainContent;
