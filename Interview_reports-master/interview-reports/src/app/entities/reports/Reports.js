import React, { Fragment, useEffect, useState, useCallback } from "react";
import { deleteReport } from "../../../services/deleteReport";
import getReports from "../../../services/getReport";
import Loader from "../../components/Loader/Loader";
import ReportsUI from "./reportsUI/ReportsUI";

const Reports = () => {
  const token = sessionStorage.getItem("token");
  const [reports, setReports] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewAlert, setviewAlert] = useState(false);

  const getData = useCallback(
    async function () {
      let data = await getReports(token);
      if (data) {
        setReports(data);
        setLoading(false);
      }
    },
    [token]
  );

  const deleteOnClick = (id) => {
    setLoading(true);
    const data = deleteReport(token, id);
    data.then((res) => {
      setviewAlert(true);
      setReports(res);
      setLoading(false);
      setTimeout(() => {
        setviewAlert(false);
      }, 3000);
    });
  };
  useEffect(() => {
    getData();
  }, [getData]);
  const search = (e) => {
    setValue(e.target.value);
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <ReportsUI
          reports={reports}
          value={value}
          search={search}
          viewAlert={viewAlert}
          deleteOnClick={deleteOnClick}
        />
      )}
    </Fragment>
  );
};

export default Reports;