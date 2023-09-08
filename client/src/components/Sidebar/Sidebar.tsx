import cls from "./SIdebar.module.scss";
import SliderComponent from "./Slider/Slider";
import Stars from "./Stars/Stars";

export const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <SliderComponent />
      <Stars />
    </div>
  );
};
