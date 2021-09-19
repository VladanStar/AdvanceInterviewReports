import React, { Fragment, useEffect, useState } from "react";
import getReports from "../../../services/getReport";
import Loader from "../../components/Loader/Loader";
import ReportsUI from "./reportsUI/ReportsUI";

const Reports = () => {
  const token = sessionStorage.getItem("token");
  const [reports, setReports] = useState([]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(true);
 
  async function getData() {
    let data = await getReports(token);
    if(data) {
      setReports(data);
      setLoading(false);
    }
  }
  useEffect(()=>{getData()});
  const search = (e) =>{
    setValue(e.target.value);
  }
  return(
      <Fragment>
          {loading ? <Loader /> : <ReportsUI reports={reports} value={value} search={search} />}
      </Fragment>
  );
};

export default Reports;