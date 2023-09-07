import { Grid } from "@material-ui/core";

import React, { FC } from "react";
import Product from "./Product/Product";
const template = new Array(12).fill({
  picture: "picture",
  name: "name",
  rate: 5,
  price: 200,
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum error veniam vero expedita totam?",
});

const productEl = template.map((el) => (
  <Product
    picture={el.picture}
    name={el.name}
    rate={el.rate}
    price={el.price}
    description={el.description}
  />
));
const Goods: FC = () => {
  return (
    <Grid
      xs={12}
      style={{ justifyContent: "center", height: "100%", padding: "20px 0px" }}
      container
      spacing={4}
    >
      {productEl}
    </Grid>
  );
};

export default Goods;
