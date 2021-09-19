import React, { useState, useEffect, Fragment } from "react";
import  getCandidates  from "../../../services/getCandidates";
import Loader from "../../components/Loader/Loader";
import CandidatesUI from "./CandidateUI/CandidatesUI";
import "./Home.css";

const Home = () => {
  const token = sessionStorage.getItem("token");
  const [candidates, setCandidates] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const onGetCandidates = () => {
    const get = async () => {
      const onGetCandidates = await getCandidates(token);
      setCandidates(onGetCandidates);
      setLoading(false);
    };
    get();
  };
  useEffect(onGetCandidates, [token]);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Fragment>
      {loading? <Loader />: <CandidatesUI candidates={candidates} value={value} search={onChange} />}
    </Fragment>
  );
};

export default Home;