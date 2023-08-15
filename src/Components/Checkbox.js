import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <label>
      <input
        className={classes.input}
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
      ></input>
      {props.label}
    </label>
  );
};

export default Checkbox;
