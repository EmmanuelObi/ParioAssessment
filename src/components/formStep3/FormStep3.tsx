import React from "react";
import { pageAssets } from "../../assets";
import classes from "../formStep1/formSteps.module.css";

const FormStep3 = () => {
  return (
    <div className={classes.formStep3}>
      <div className={classes.heading}>
        <span>Item Name</span>
        <span>
          <img src={pageAssets.nairaImg} alt="naira" width="15px" /> Price
        </span>
      </div>
      <br />
      <div className={classes.item}>
        <span>Data science and usability</span>
        <span>50,000.00</span>
      </div>
      <div className={classes.shipping}>
        <span>Shipping</span>
        <span>0.00</span>
      </div>
      <div className={classes.break}></div>
      <div className={classes.total}>
        <span>Total</span>
        <span>50,000.00</span>
      </div>
    </div>
  );
};

export default FormStep3;
