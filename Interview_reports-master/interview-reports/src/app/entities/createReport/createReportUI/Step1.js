import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Step1 = ({ handleOnChange, value, candidates, nextStep }) => {
    return(
        // <h1>page 1 <input onChange={ (e) => handleOnChange('candidate', e.target.value)} value={value} /></h1>
        <main>
            <Container>
                <Row>
                    <Col lg={3}>
                    <div>step 1</div>
                    <div>step 2</div>
                    <div>step 3</div>
                    </Col>
                    <Col lg={9}>
                    {candidates.map((candidate, index) => {
                        return(
                            <div key={index} onClick={ () => handleOnChange('candidate', candidate)}>
                                <p>{candidate.name}</p>
                                <p>{candidate.email}</p>
                            </div>
                        )
                    })}
                    </Col>
                    <Button onClick={nextStep}>Next</Button>
                </Row>
            </Container>
        </main>
    )
}

export default Step1;