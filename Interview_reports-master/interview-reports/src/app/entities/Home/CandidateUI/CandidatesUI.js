import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import FilterUser from "../../../../Data/FilteredUsers";
import SearchBar from "../../../components/Searchbar/Searchbar";
import "./Candidate.css";

const CandidatesUI = ({ candidates, value, search }) => {
  const img =
    "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
    var filteredCandidates = [];
    console.log(candidates);

    if (candidates && candidates.length > 0 && Array.isArray(candidates)) {
      filteredCandidates = FilterUser(candidates, value);
  }
    
  if (filteredCandidates.length === 0) {
    return (
      <main>
        <SearchBar value={value} search={search} />
        <h1>No results</h1>
      </main>
    );
  }
  
  return (
    <main>
      <Container>
        <SearchBar value={value} search={search} />
        <Row className="text-center">
          {filteredCandidates.map((candidate, index) => {
            return (
              <Col
                xs={12}
                md={6}
                xl={4}
                className="d-flex justify-content-center mb-5"
                key={index}
              >
                <Link to={`/candidate/${candidate.id}`} className="imgH">
                  <Card
                    className="radiusShadow"
                    border="primary"
                    bg="secondary"
                    text="white"
                  >
                    <Image
                      src={img}
                      alt="no img!!!"
                      roundedCircle
                      className="p-5"
                    />

                    <Card.Body>
                      <Card.Title className="mb-3">{candidate.name}</Card.Title>
                      <Card.Text>{candidate.email}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default CandidatesUI;