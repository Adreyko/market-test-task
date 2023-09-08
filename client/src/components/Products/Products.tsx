import { FC } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import { useAppSelector } from "../../redux/hooks/redux-hook";

const Products: FC = () => {
  const products = useAppSelector((products) => products.products.products);
  const productEl = products?.map((el) => (
    <Product
      key={el._id}
      image={el.image}
      _id={el._id}
      rate={el.rate}
      price={el.price}
      description={el.description}
    />
  ));
  return (
    <Grid
      xs={12}
      item
      style={{ justifyContent: "center", height: "100%", padding: "20px 0px" }}
      container
      spacing={1}
    >
      {productEl}
    </Grid>
  );
};

export default Products;
