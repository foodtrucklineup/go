import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img className={classes.logoImg} src={logo} alt="logo" />
      </div>
      <Link to="Form" smooth={true} offset={-110} duration={500}>
        <button className={classes.button}>Sign Up</button>
      </Link>
    </nav>
  );
};

export default Nav;
