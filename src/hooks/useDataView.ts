import { dataViewActions } from "../redux/dataViewSlice";
import { useAppDisPatch } from "../redux/store";
import useHttps from "./useHttps";
import { GridColDef } from "@mui/x-data-grid";

const useDataView = () => {
  const sendRequest = useHttps();
  const dispatch = useAppDisPatch();
  const config = {
    method: "get",
    url: "https://covidnigeria.herokuapp.com/api",
  };

  const successCallback = (data: any) => {
    console.log(data.data);
    dispatch(dataViewActions.setData(data.data));
  };

  const setLoading = (value: boolean) => {
    dispatch(dataViewActions.setLoading(value));
  };

  const getData = () => {
    sendRequest(config, successCallback, setLoading);
  };

  const columns: GridColDef[] = [
    { field: "state", headerName: "State", width: 80 },
    {
      field: "discharged",
      headerName: "Discharged",
      width: 100,
      type: "number",
    },
    {
      field: "death",
      headerName: "Deaths",
      type: "number",
      width: 100,
    },
    {
      field: "confirmedCases",
      headerName: "Confirmed Cases",
      type: "number",
      width: 250,
    },
    {
      field: "casesOnAdmission",
      headerName: "Cases On Admission",
      type: "number",
      width: 250,
    },
  ];

  return {
    getData,
    columns,
  };
};

export default useDataView;
