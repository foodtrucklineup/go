import classes from "./StepCard.module.css";

const StepCard = (props) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.img} src={props.src} alt={props.alt} />
      <div>
        <h2 className={classes.title}>{props.title}</h2>
        <p className={classes.body}>{props.content}</p>
      </div>
    </div>
  );
};

export default StepCard;
