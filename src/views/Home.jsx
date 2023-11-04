import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Container>
        <h1>Bienvenidos a nuestra tienda!</h1>
        <p>
          Explora nuestra seccion de cosas!
        </p>
        <p>No dudes en consultarnos!</p>
        <p>
          <Button variant="primary" href="/contact">Contacto</Button>
        </p>
    </Container>
  );
}

export default Home;
