import './App.css';
import {Container, Row, Col}  from 'react-bootstrap';
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <Container>
    <Row>
      <Header/>
      
    </Row>
    <Row>
      <Col>
      <Hero/>
      </Col>
    </Row>
    </Container>
   
  );
}

export default App;
