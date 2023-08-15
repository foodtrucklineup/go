import classes from "./HeroSection.module.css";
import foodTruckCircle from "../assets/Food-truck-circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import menu from "../assets/Menu-circle.png";

const HeroSection = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.heroGrid}>
        <div className={classes.graphic}>
          <img
            className={classes.foodTruck}
            src={foodTruckCircle}
            alt="Food truck"
          />
          <div className={classes.dashOne}></div>
          <div className={classes.dashTwo}></div>
          <div className={classes.dashThree}></div>
          <img className={classes.menu} src={menu} alt="Menu" />
          <div className={classes.socialIconOne}>
            <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
          </div>
          <div className={classes.socialIconTwo}>
          <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
          </div>
        </div>
        <div className={classes.content}>
          <h1 className={classes.title}>
            Manage your Schedule and Menu{" "}
            <span className={classes.bold}>All in ONE Place</span>
          </h1>
          <p className={classes.body}>
            It’s tedious to keep your website and Facebook page all up to date
            each week. This is where Food Truck Lineup comes in! Update your
            schedule each week on our platform and it will automatically update
            all your marketing accounts!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
