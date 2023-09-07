import Cart from "./Cart/Cart";
import cls from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";

const Header = () => {
  return (
    <div className={cls.header}>
      <Logo />
      <Search />
      <div className={cls.right__side}>
        <Cart />
        <Profile/>
      </div>
    </div>
  );
};

export default Header;
