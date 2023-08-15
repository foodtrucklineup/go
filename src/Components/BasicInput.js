import classes from "./BasicInput.module.css";

const BasicInput = (props) => {
  return (
    <input
      className={classes.input}
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
    ></input>
  );
};

export default BasicInput;
