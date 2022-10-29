import axios from "axios";
import React from "react";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";


const getWeather = async (url) => {
  const respuesta = await axios.get(url);
  return respuesta.data.current_weather;
}
let temp;
getWeather('https://api.open-meteo.com/v1/forecast?latitude=-33.4691&longitude=-70.6420&current_weather=true')
  .then((data) => {
    temp = data.temperature;
  })
  .catch((err) => {
    console.error(err);
  });

function Uf() {

  let { tot } = useParams();

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <p>Total de Tareas por completar: {tot}</p>
          <h1>La temperatura</h1>
        </Col>
        <Col xs={6}>
          <p>En santiago, a esta hora, hay {temp} celcius.</p>
        </Col>
      </Row>
      <Row>
        <Button variant="primary">Hola!</Button>
      </Row>
    </Container>
  );
}

export { Uf };