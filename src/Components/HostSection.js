import { Link } from "react-scroll";
import classes from "./HostSection.module.css";
import Button from "./Button";

const HostSection = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.grid}>
        <div>
          <div className={classes.img}></div>
          <div className={classes.dashedBorder}></div>
        </div>
        <div className={classes.content}>
          <h2 className={classes.title}>
            Are you a brewery or establishment who hosts food trucks on a
            regular basis?
          </h2>
          <p className={classes.body}>
            Coming soon: Food Truck Lineup for Food Truck Hosts. Keep your
            weekly food truck schedule up to date all in one location! Sign up
            below to get notified on when we launch
          </p>
          <Link to="Form" smooth={true} offset={-110} duration={500}>
            <Button text="Get Notified" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HostSection;
