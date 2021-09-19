import React from "react";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import SetDate from "../../../Data/SetDate";

const Modalset = ({ modalObj, closed }) => {
    console.log(modalObj)
  return (
    <>
      <Modal show={true} >
        <Modal.Header closeButton onHide={closed} >
          <h2>{modalObj.candidateName}</h2>
        </Modal.Header>
        <Modal.Body className="body">
          <div className="info">
            <p>Company:</p>
            <h4>{modalObj.companyName}</h4>
            <p>Interview Date:</p>
            <h4>{SetDate(modalObj.interviewDate)}</h4>
            <p>Phase:</p>
            <h4>{modalObj.phase}</h4>
            <p>Status:</p>
            <h4>{modalObj.status}</h4>
          </div>
          <div className="notes">
              <p>Notes:</p>
            <h7>{modalObj.note}</h7>
          </div>
        </Modal.Body>
      </Modal>
    
    </>
  );
};

export default Modalset;