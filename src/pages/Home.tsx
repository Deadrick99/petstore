import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <body>
      <div className="Home">  
      <div className="row align-items-center vh-100">
      <Col sm={3} lg={2} className = "m-3 mx-auto p-3">
            <Card style={{ textAlign: 'center', width:'100%', height:'100%', boxShadow:'10px 5px 5px black' }}>
            <Row>
                 <Col>  
                 <Card.Title>Welcome to the Pet Store</Card.Title>
                </Col>
            </Row>
            </Card>
      </Col>
      </div>
      </div>
    </body>
);
}

export default Home;
