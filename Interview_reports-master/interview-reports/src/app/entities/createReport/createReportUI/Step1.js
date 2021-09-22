import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import FilterUser from "../../../../Data/FilteredUsers";
import SearchBar from "../../../components/Searchbar/Searchbar";
import "./steps.css";

const Step1 = ({ handleOnChange, value, candidates, nextStep, selected }) => {
  let history = useHistory();
  const filteredCandidates = FilterUser(candidates, value);
  const img =
    "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
  return (
    // <h1>page 1 <input onChange={ (e) => handleOnChange('candidate', e.target.value)} value={value} /></h1>
    <main>
      <Container className="mt-3">
        <Row>
          <Col lg={3}>
            <div className="mb-4 currentStep">
              <span>1</span>Select Candidate
            </div>
            <div className="mb-4">
              <span>2</span>Select Company
            </div>
            <div className="mb-4">
              <span>3</span>Fill Report Detail
            </div>
          </Col>
          <Col lg={9} className="leftBorder">
            <Row>
              <SearchBar
                value={value}
                search={(e) => handleOnChange("value", e.target.value)}
              />
              {filteredCandidates.map((candidate, index) => {
                return (
                  <Col lg={6} key={index}>
                    <div
                      className="d-flex p-2 bgColor mb-3"
                      onClick={() => handleOnChange("candidate", candidate)}
                    >
                      <img src={img} className="img" alt="No img!!!" />
                      <div>
                        <p className="m-1">{candidate.name}</p>
                        <p className="m-1">{candidate.email}</p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <div className="divButton">
            <Button
              variant="outline-danger"
              className="buttonNext"
              onClick={() => history.push("/")}
            >
              Cancel
            </Button>
            <Button
              variant="outline-info"
              className="buttonNext"
              onClick={nextStep}
              disabled={!selected}
            >
              Next
            </Button>
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default Step1;