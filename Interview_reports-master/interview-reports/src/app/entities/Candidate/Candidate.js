import React, { Fragment, useEffect, useState } from "react";
import getCandidates from "../../../services/getCandidates";
import getReports from "../../../services/getReport";
import Loader from "../../components/Loader/Loader";
import "./Candidate.css";
import SingleCandidate from "../CandidateReportsUI/SingleCandidate";

const Candidate = ({ match }) => {
  const id = parseInt(match.params.id);
  const token = sessionStorage.getItem("token");
  const [candidate, setCandidate] = useState({});
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const onGetCandidates = () => {
    const get = async () => {
      const candidates = await getCandidates(token);
      candidates.forEach((candidate) => {
        if (candidate.id === id) {
          setCandidate(candidate);
        }
      });
    };
    get();
  };
  const onGetReports = () => {
    const reports = async () => {
      let tempRepots = [];
      const allReports = await getReports(token);
      allReports.forEach((report) => {
        if (report.candidateId === id) {
          tempRepots.push(report);
        }
      });
      setReports(tempRepots);
      setLoading(false);
    };
    reports();
  };
  useEffect(onGetCandidates, [token, id]);
  useEffect(onGetReports, [token, id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <SingleCandidate candidate={candidate} reports={reports} />
      )}
    </Fragment>
  );
};

export default Candidate;