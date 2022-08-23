import { CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import OverviewInfo from "../../components/overviewInfo/OverviewInfo";
import useDataView from "../../hooks/useDataView";
import { useAppSelector } from "../../redux/store";
import classes from "./dataView.module.css";

const DataView = () => {
  const {
    dataview: { loading, data },
  }: any = useAppSelector((state) => state);
  const { getData, columns } = useDataView();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.dataView}>
      {loading ? (
        <div className={classes.loader}>
          <CircularProgress />
          <p>Please wait, fetching resource...</p>
        </div>
      ) : (
        <div className={classes.fullview}>
          {data && (
            <>
              <h1>Data View</h1>
              <p>Total Stats:</p>
              <OverviewInfo data={data} />
              <DataGrid
                rows={data.states}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={(row) => row._id}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DataView;
