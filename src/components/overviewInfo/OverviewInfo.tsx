import React from "react";
import classes from "./overview.module.css";

interface OverviewProps {
  data: any;
}

const OverviewInfo = ({ data }: OverviewProps) => {
  return (
    <div className={classes.overview}>
      <div>
        <p> Deaths</p>
        <span>{data.death}</span>
      </div>
      <div>
        <p> Discharged</p>
        <span>{data.discharged}</span>
      </div>
      <div>
        <p> States</p>
        <span>{data.states.length}</span>
      </div>
      <div>
        <p> Active Cases</p>
        <span>{data.totalActiveCases}</span>
      </div>
      <div>
        <p> Confirmed Cases</p>
        <span>{data.totalConfirmedCases}</span>
      </div>
      <div>
        <p> Samples Tested</p>
        <span>{data.totalSamplesTested}</span>
      </div>
    </div>
  );
};

export default OverviewInfo;
