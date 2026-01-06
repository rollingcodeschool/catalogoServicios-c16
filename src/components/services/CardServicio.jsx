import { Button, Card, Col } from "react-bootstrap";

const CardServicio = ({servicio}) => {
  return (
    <Col>
      <Card >
        <Card.Img variant="top" src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg" />
        <Card.Body>
          <Card.Title>{servicio.servicio}</Card.Title>
          <Card.Text>
            {servicio.descripcion_breve}
          </Card.Text>
          <Card.Text>
            Precio: $ {servicio.precio}
          </Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardServicio;
