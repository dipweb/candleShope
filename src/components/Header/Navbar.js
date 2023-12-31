import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={classes.navbar}>
        <ul>
          <li>Products</li>
          <li>Samples</li>
          <li>Feedback</li>
          <li>Conatact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
