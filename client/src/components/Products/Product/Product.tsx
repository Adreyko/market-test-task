import { FC } from "react";
import { Paper, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { Star } from "@mui/icons-material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { IProduct } from "../../../interfaces/interfaces";
import { productMuiStyles } from "./muiStyles";
import Rate from "./Rate/Rate";
import Watch from "./Watch/Watch";
import cls from "./Product.module.scss";
import { muiStyles } from "../../Sidebar/Stars/muiStyles";

const Product: FC<IProduct> = ({ price, description, image, rate, _id }) => {
  const totalRate = rate.reduce(
    (accumulator, currentValue) => accumulator + currentValue / rate.length,
    0
  );
  const starsArr = new Array(Math.ceil(totalRate) - 1)
    .fill(1)
    .map((el) => <Rate key={el._id} />);

  const product = {
    _id,
    image,
    description,
    price,
    rate,
  };

  return (
    <Grid
      sx={productMuiStyles.gridStyle}
      style={{ padding: "20px" }}
      item
      lg={3}
      xl={1}
    >
      <Paper style={productMuiStyles.paperStyle}>
        <image />
      </Paper>
      <p className={cls.description}>{description}</p>
      <Typography style={{ color: "blue", marginBottom: "10px" }}>
        {image.replace(".png", "")}
      </Typography>
      <Typography style={{ fontWeight: "bold" }}>${price}</Typography>
      <div className={cls.rate__container}>
        <div className={cls.rate__info}>
          {starsArr}
          {Number.isInteger(totalRate) ? (
            <Star sx={muiStyles.starStyle} />
          ) : (
            <StarHalfIcon sx={muiStyles.starStyle} />
          )}{" "}
          <p style={{ fontSize: "10px" }}>{totalRate.toFixed(2)}</p>
        </div>
        <Watch product={product} />
      </div>
    </Grid>
  );
};

export default Product;
