import React, { useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SetDate from "../../../Data/SetDate";
import Modalset from "../../components/modal/Modal";
import "./SingleCandidate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SingleCandidate = ({ candidate, reports }) => {
  const [isView, setIsView] = useState(false);
  const [modalObj, setModalObj] = useState({});
  const closedModal =()=>{
    setIsView(false)
  }
  console.log(modalObj)
  const img =
    "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
  return (
    <main>
        {isView && <Modalset modalObj={modalObj} closed={closedModal}/>}
      <Container>
        <Row>
          <Col xs={12} md={12} lg={4}>
            <Image src={img} alt="no img" fluid />
          </Col>
          <Col xs={12} md={12} lg={4}>
            <p>Name:</p>
            <p className="leftM">{candidate.name}</p>
            <p>Email:</p>
            <p className="leftM">{candidate.email}</p>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <p>Date of birth:</p>
            <p className="leftM">{SetDate(candidate.birthday)}</p>
            <p>Education:</p>
            <p className="leftM">{candidate.education}</p>
          </Col>
        </Row>
        <Table className="mt-5">
          <thead className="opacity">
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Interview date</th>
              <th>Status</th>
              <th>View</th>
            </tr>
            {reports.map((report, index) => {
                return(
                    <tr key={index}>
                        <th>{index+1}</th>
                        <th>{report.companyName}</th>
                        <th>{SetDate(report.interviewDate)}</th>
                        <th>{report.status}</th>
                        <th>{<button onClick={()=>{setModalObj(report); setIsView(true)}}><FontAwesomeIcon icon={faEye}/></button>}</th>
                    </tr>
                )
            })}
          </thead>
        </Table>
      </Container>
    </main>
  );
};

export default SingleCandidate;