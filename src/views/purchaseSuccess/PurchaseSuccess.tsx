import React from "react";
import { Link } from "react-router-dom";
import { pageAssets } from "../../assets";
import classes from "./purchaseSuccess.module.css";

const PurchaseSuccess = () => {
  return (
    <div className={classes.purchaseSuccess}>
      <div className={classes.check}>
        <img src={pageAssets.checkImg} alt="check" />
      </div>
      <h2>Purchase Completed</h2>
      <p>Please check your email for details concerning this transaction</p>

      <div>
        <Link to="/">
          <span>Return Home</span>
        </Link>
        <Link to="/datatable">
          <span>Go to Task 2</span>
        </Link>
      </div>
    </div>
  );
};

export default PurchaseSuccess;
