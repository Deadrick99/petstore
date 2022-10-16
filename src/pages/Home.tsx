import image from "./images/pets2.png";
import {useEffect, useState} from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
const Home = () => {
  const [visited, useVistited] = useState(false);
  useEffect(()=>{
  console.log("increment vistor");
},[visited])
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
