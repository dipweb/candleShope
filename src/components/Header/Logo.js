import candle_logo from "../../assets/img/candle_logo.png";
import classes from "./Logo.module.css";
const Logo = () => {
  return (
    <>
      <img className={classes.logo} src={candle_logo} alt="candle logo" />
    </>
  );
};

export default Logo;
