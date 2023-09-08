import React, { useEffect, useState } from "react";
import cls from "./Stars.module.scss";
import { Star } from "@mui/icons-material";
import { muiStyles } from "./muiStyles";
import { useAppDispatch } from "../../../redux/hooks/redux-hook";
import { setRatingProducts } from "../../../redux/slices/ratingSlice";

const Stars = () => {
  const fourStars = new Array(4)
    .fill(1)
    .map(() => <Star key={4} sx={muiStyles.starStyle} />);
  const threeStars = new Array(3)
    .fill(1)
    .map(() => <Star key={3} sx={muiStyles.starStyle} />);
  const twoStars = new Array(2)
    .fill(1)
    .map(() => <Star key={2} sx={muiStyles.starStyle} />);
  const oneStars = new Array(1)
    .fill(1)
    .map(() => <Star key={1} sx={muiStyles.starStyle} />);
  const [sortyByRating, setSortByRating] = useState(0);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setRatingProducts(sortyByRating));
  }, [sortyByRating]);

  return (
    <div className={cls.container}>
      <div className={cls.stars} onClick={() => setSortByRating(4)}>
        {fourStars} <p>& up</p>
      </div>
      <div className={cls.stars} onClick={() => setSortByRating(3)}>
        {threeStars} <p>& up</p>
      </div>
      <div className={cls.stars} onClick={() => setSortByRating(2)}>
        {twoStars} <p>& up</p>
      </div>
      <div className={cls.stars} onClick={() => setSortByRating(1)}>
        {oneStars} <p>& up</p>
      </div>
    </div>
  );
};

export default Stars;
