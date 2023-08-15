import classes from "./Form.module.css";
import BasicInput from "./BasicInput";
import Button from "./Button";
import Checkbox from "./Checkbox";

const Form = () => {
  return (
    <div className={classes.formBackground}>
      <form
        name="FTL Schedule Form"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <h2 className={classes.header}>
          Fill Out This Bad Boy <br />{" "}
          <span className={classes.headerSmall}>
            To Try Out Our Beta Platform and Get Discount Pricing!
          </span>
        </h2>
        <input type="hidden" name="form-name" value="FTL Schedule Form" />
        <BasicInput type="text" id="name" name="name" placeholder="Name" />
        <BasicInput
          type="text"
          id="foodtruckName"
          name="foodtruckName"
          placeholder="Name of Food Truck"
        />
        <div className={classes.twoCol}>
          <div className={classes.twoColWidth}>
            <BasicInput type="text" id="city" name="city" placeholder="City" />
          </div>
          <div className={classes.twoColWidth}>
            <BasicInput
              type="text"
              id="state"
              name="state"
              placeholder="State"
            />
          </div>
        </div>
        <BasicInput type="email" id="email" name="email" placeholder="Email" />
        <BasicInput
          type="url"
          id="website"
          name="website"
          placeholder="Website URL"
        />
        <BasicInput
          type="text"
          id="facebook"
          name="facebook"
          placeholder="Facebook Page"
        />
        <p className={classes.question}>Can we contact you to set up a demo?</p>
        <Checkbox id="demo" name="demo" value="Yes" label="Yes!" />
        <p className={classes.question}>
          Would you be interested in being on our podcast?
        </p>
        <Checkbox id="podcast" name="podcast" value="Yes" label="Yes!" />
        <div className={classes.center}>
          <Button type="submit" text="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default Form;
