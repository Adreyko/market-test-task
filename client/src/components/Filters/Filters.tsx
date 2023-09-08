import { FC } from "react";
import Sort from "./Sort/Sort";
import cls from "./Filter.module.scss";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Filters: FC = () => {
  return (
    <div className={cls.filters}>
      <div>
        <Sort />
        <Select style={{ marginRight: "10px" }} value={"condition"}>
          <MenuItem value={"condition"}>condition</MenuItem>
        </Select>
        <Select style={{ marginRight: "10px" }} value={"delivery option"}>
          <MenuItem value={"delivery option"}>condition</MenuItem>
        </Select>
      </div>

      <div>
        <ViewListIcon sx={{ color: "blue" }} />
        <ViewModuleIcon sx={{ color: "blue" }} />
      </div>
    </div>
  );
};

export default Filters;
