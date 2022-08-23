import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopShape from "./components/topShape/TopShape";
import DataView from "./views/dataView/DataView";
import FormArea from "./views/formArea/FormArea";
import PurchaseSuccess from "./views/purchaseSuccess/PurchaseSuccess";

function App() {
  return (
    <div className="App">
      <TopShape />
      <Routes>
        <Route path="/datatable" element={<DataView />} />
        <Route path="/paymentsuccess" element={<PurchaseSuccess />} />
        <Route path="/" element={<FormArea />} />
      </Routes>
    </div>
  );
}

export default App;
