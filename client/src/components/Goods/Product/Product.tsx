import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import Stars from "./Stars/Stars";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Product = (props: any) => {
  const starsArr = new Array(props.rate)
    .fill(props.rate)
    .map((el: any) => <Stars number={el} />);
  return (
    <Grid item lg={3} xl={1}>
      <Paper
        style={{ width: "100%", height: "150px", backgroundColor: "black" }}
      >
        <image />
      </Paper>
      <Typography style={{ fontSize: "1rem" }}>{props.description}</Typography>
      <Typography style={{ fontWeight: "bold" }}>${props.price}</Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>{starsArr}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FavoriteIcon />
          <p>Watch</p>
        </div>
      </div>
    </Grid>
  );
};

export default Product;
