import { FC } from "react";
import Sort from "./Sort/Sort";
import cls from "./Filter.module.scss";

const Filters: FC = () => {
  return (
    <div className={cls.filters}>
      <Sort />
      <div>
        <h1>2</h1>
        <h1>2</h1>
      </div>
    </div>
  );
};

export default Filters;
