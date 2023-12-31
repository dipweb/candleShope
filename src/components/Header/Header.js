import classes from "./Header.module.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Profile from "./Profile";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <Logo />
        <Navbar />
        <Profile />
        {/* mobile and tab view */}
        <span className={classes.muneIcon}>
          <FiMenu font-size="25px" />
        </span>
      </div>
    </>
  );
};

export default Header;
