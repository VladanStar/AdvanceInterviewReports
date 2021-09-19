import React, { useState, useEffect } from "react";
import { Fragment } from "react";
// import { getCandidates } from "../../../services/getCandidates";
import getCandidates from "../../../services/getCandidates";
import Loader from "../../components/Loader/Loader";
import Step1 from "./createReportUI/Step1";
import Step2 from "./createReportUI/Step2";
import Step3 from "./createReportUI/Step3";

const CreateReport = () => {
  const token = sessionStorage.getItem("token");
  const [candidates, setCandidates] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  console.log(data, 'podaci');

  const handleOnChange = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
const nextStep = () => {
  setPage(page + 1);
}
  const onGetCandidates = () => {
    const get = async () => {
      const onGetCandidates = await getCandidates(token);
      setCandidates(onGetCandidates);
      setLoading(false);
    };
    get();
  };
  useEffect(onGetCandidates, [token]);

  return (
    <Fragment>
      {page === 1 &&
        (loading ? (
          <Loader />
        ) : (
          <Step1 handleOnChange={handleOnChange} value={data.candidate} candidates={candidates} nextStep={nextStep} />
        ))}
      {page === 2 &&
        (loading ? (
          <Loader />
        ) : (
          <Step2 handleOnChange={handleOnChange} value={data.company} />
        ))}
      {page === 3 && (loading ? <Loader /> : <Step3 />)}
    </Fragment>
  );
};

export default CreateReport;