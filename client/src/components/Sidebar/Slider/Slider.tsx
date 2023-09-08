import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import cls from "./Slider.module.scss";
const SliderComponent = () => {
  const minDistance = 10;
  const [value, setValue] = useState<number[]>([20, 500]);
  function valuetext(value: number) {
    return `${value}°C`;
  }


  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <div className={cls.range}>
      <Slider
        min={0}
        max={500}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </div>
  );
};

export default SliderComponent;
