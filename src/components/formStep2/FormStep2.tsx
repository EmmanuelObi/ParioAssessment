import React from "react";
import classes from "../formStep1/formSteps.module.css";

const FormStep2 = () => {
  return (
    <div className={classes.formStep}>
      <div className={classes.formGroup}>
        <label htmlFor="noc">
          Name on Card <span>*</span>
        </label>
        <input
          type="text"
          name="noc"
          id="noc"
          className={classes.input}
          placeholder="Opara Linus Ahmed"
        />
      </div>
      <br />
      <div className={classes.formGroup}>
        <label htmlFor="cardType">
          Card Type <span>*</span>
        </label>
        <select
          name="cardType"
          id="cardType"
          className={classes.input}
          placeholder="Visa"
        >
          <option value="">Visa</option>
          <option value="Lagos">MasterCard</option>
        </select>
      </div>
      <br />
      <div className={classes.billing}>
        <div className={classes.formGroup}>
          <label htmlFor="details">
            Card Details <span>*</span>
          </label>
          <input
            type="text"
            name="details"
            id="details"
            className={classes.input}
            placeholder="2222 3422 6751 89763"
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="date">
            Expiry Date <span>*</span>
          </label>
          <input
            type="month"
            name="cvv"
            id="cvv"
            className={classes.input}
            placeholder="923"
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="cvv">
            CVV <span>*</span>
          </label>
          <input
            type="number"
            max={999}
            name="cvv"
            id="cvv"
            className={classes.input}
            placeholder="923"
          />
        </div>
      </div>
    </div>
  );
};

export default FormStep2;
