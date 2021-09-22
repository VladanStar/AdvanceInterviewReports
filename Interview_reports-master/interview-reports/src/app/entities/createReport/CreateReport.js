import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { errorHandle } from "../../../Data/errorHandle";
import { getRandomInt } from "../../../Data/randomId";
import Reports from "../reports/Reports";
import getCandidates  from "../../../services/getCandidates";
import { getCompany } from "../../../services/getCompany";
import Loader from "../../components/Loader/Loader";
import Step1 from "./createReportUI/Step1";
import Step2 from "./createReportUI/Step2";
import Step3 from "./createReportUI/Step3";

const CreateReport = () => {
  let history = useHistory();
  const token = sessionStorage.getItem("token");
  const [candidates, setCandidates] = useState([]);
  const [company, setCompany] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ value: "", valueCompany: "" });
  const [error, setError] = useState('');
  const [viewAlert, setviewAlert] = useState(false);
  // console.log(data, "podaci");
  const id = getRandomInt();
  const handleOnChange = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const nextStep = () => {
    setPage(page + 1);
  };

  const backStep = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const onGetCandidates = () => {
    const get = async () => {
      const onGetCandidates = await getCandidates(token);
      setCandidates(onGetCandidates);
      setLoading(false);
    };
    get();
  };
  const postDate = () => {
    
    const postData = new Reports(
      id,
      data.candidate.id,
      data.candidate.name,
      data.company.id,
      data.company.name,
      new Date(data.date),
      data.phase,
      data.status,
      data.notes
    );
    try{
      errorHandle(data);
    fetch("http://localhost:3333/660/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if(res.ok){
          setviewAlert(true);
         setTimeout(()=>{ history.push('/');}, 2000)
        }
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    }
    catch(e){
      console.log(e);
      setError(e.message);
    }
  };
  const onGetCompany = () => {
    const get = async () => {
      const onGetCompany = await getCompany(token);
      setCompany(onGetCompany);
      setLoading(false);
    };
    get();
  };

  useEffect(onGetCandidates, [token]);
  useEffect(onGetCompany, [token]);

  return (
    <Fragment>
      {page === 1 &&
        (loading ? (
          <Loader />
        ) : (
          <Step1
            handleOnChange={handleOnChange}
            value={data.value}
            candidates={candidates}
            nextStep={nextStep}
            selected={data.candidate}
          />
        ))}
      {page === 2 &&
        (loading ? (
          <Loader />
        ) : (
          <Step2
            handleOnChange={handleOnChange}
            value={data.valueCompany}
            companies={company}
            nextStep={nextStep}
            backStep={backStep}
            selected={data.company}
          />
        ))}
      {page === 3 &&
        (loading ? (
          <Loader />
        ) : (
          <Step3
            handleOnChange={handleOnChange}
            value={data.date}
            backStep={backStep}
            postDate={postDate}
            error={error}
            viewAlert={viewAlert}
          />
        ))}
    </Fragment>
  );
};

export default CreateReport;