import React from "react";
import classes from "./formSteps.module.css";

const FormStep1 = () => {
  return (
    <div className={classes.formStep}>
      <div className={classes.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className={classes.input}
          placeholder="Opara Linus Ahmed"
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="mail">
          Email Address <span>*</span>
        </label>
        <p>The purchase reciept would be sent to this address</p>
        <input
          type="text"
          name="mail"
          id="mail"
          placeholder="OparaLinusAhmed@devmail.com"
          className={classes.input}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="address">Address 1</label>
        <input
          type="text"
          name="address"
          id="address"
          className={classes.input}
          placeholder="Address line 1"
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="address">Address 2</label>
        <input
          type="text"
          name="address"
          id="address"
          className={classes.input}
          placeholder="Address line 2"
        />
      </div>
      <div className={classes.gov_state}>
        <div className={classes.formGroup}>
          <label htmlFor="local"> Local Government</label>
          <input
            type="text"
            name="local"
            id="local"
            className={classes.input}
            placeholder="Surulere"
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="state">State </label>
          <select
            name="state"
            id="state"
            className={classes.input}
            placeholder="State"
          >
            <option value="">State</option>
            <option value="Lagos">Lagos</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormStep1;
