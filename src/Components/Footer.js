import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";
import Form from "./Form";

const Footer = () => {
  return (
    <Fragment>
      <footer id="Form" className={classes.footerBackground}>
        <Form />
      </footer>

      <div className={classes.socialBar}>
        <a href="https://www.facebook.com/foodtrucklineup/">
          <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
        </a>
        <a className={classes.link} href="mailto:yo@foodtrucklineup.com">
          yo@foodtrucklineup.com
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;