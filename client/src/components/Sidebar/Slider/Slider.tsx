import { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import cls from "./Slider.module.scss";
import { useAppDispatch } from "../../../redux/hooks/redux-hook";
import { setRangePrice } from "../../../redux/slices/rangePriceSlice";
const SliderComponent = () => {
  const minDistance = 10;
  const [value, setValue] = useState<number[]>([0, 1000]);
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const dispatch = useAppDispatch();
  
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
  useEffect(() => {
    dispatch(setRangePrice(value));
  }, [value]);

  return (
    <>
      <h1>Price Range Selected</h1>
      <div className={cls.range}>
        <Slider
          sx={{ color: "black" }}
          min={0}
          max={500}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </div>
    </>
  );
};

export default SliderComponent;
