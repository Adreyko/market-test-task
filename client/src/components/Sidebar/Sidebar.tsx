import { Slider } from "@material-ui/core";
import cls from "./SIdebar.module.scss";
import { useState } from "react";
function valuetext(value: number) {
  return `${value}°C`;
}

export const Sidebar = () => {
  const [value, setValue] = useState<number[]>([0, 200]);
  return (
    <div className={cls.sidebar}>
      <h1>Price Range Selected</h1>
      <div className={cls.range}>
        <Slider
          style={{ width: "100%" }}
          getAriaLabel={() => "Temperature range"}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          value={value}
        />
      </div>
    </div>
  );
};
