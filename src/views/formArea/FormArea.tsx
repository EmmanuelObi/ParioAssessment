import React from "react";
import classes from "./formArea.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../components/tabPanel/TabPanel";
import FormStep1 from "../../components/formStep1/FormStep1";
import FormStep2 from "../../components/formStep2/FormStep2";
import FormStep3 from "../../components/formStep3/FormStep3";
import { useNavigate } from "react-router-dom";

const tabProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const FormArea = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const switchTabs = () => {
    if (value !== 2) {
      setValue((prev) => prev + 1);
    } else {
      navigate("/paymentsuccess");
    }
  };
  return (
    <div className={classes.formArea}>
      <h1>Complete Your Purchase</h1>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
          >
            <Tab
              label="Personal Info"
              {...tabProps(0)}
              className={classes.tab}
            />
            <Tab
              label="Billing Info"
              {...tabProps(1)}
              className={classes.tab}
            />
            <Tab
              label="Confirm Payment"
              {...tabProps(2)}
              className={classes.tab}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <FormStep1 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormStep2 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FormStep3 />
        </TabPanel>
      </Box>
      <div className={classes.cta}>
        <button onClick={switchTabs}>{value === 2 ? "Pay" : "Next"}</button>
        <button>Cancel Payment</button>
      </div>
    </div>
  );
};

export default FormArea;
