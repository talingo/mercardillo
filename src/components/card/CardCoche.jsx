import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCoche(props) {
  return (
    <Card className="text-center"style={{ width: '16rem' , heigth:'40rem'}}>
      <Card.Img  variant="top"  src="https://gomore.imgix.net/uploads/car_picture/image/676941/car_7fb87d3f-7efc-4057-995f-4d6fb272e173.jpg?ixlib=rails-2.1.2&fit=crop&w=770&h=513&auto=format%2Ccompress" />
      <Card.Img  variant="top"  src={props.image}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">ALQUILAR</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCoche;