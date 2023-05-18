import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { questions } from "./Questions";
import { MultiStepFrom } from "./components/MultiStepForm";
import { MultiStepProgressBar } from "./components/MultiStepProgressBar";

function App() {
  const [index, setIndex] = useState(1);
  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const nextButton = () => {
    if (index < 3) {
      setIndex((nextIndex) => nextIndex + 1);
    }
  };

  return (
    <div className="App">
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiStepProgressBar step={index} />
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <MultiStepFrom step={index} list={questions} />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button onClick={prevButton} disabled={index === 1}>
                Previous
              </Button>
              <Button onClick={nextButton}>Next</Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
