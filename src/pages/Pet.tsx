import  Axios  from "axios";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setPetId, setPetName } from "../redux/petName";
import { formatCurrency } from "./utilities/formatCurrency";


 interface Pet  {
             id: number;
             name : string ;
             category:string; 
             breed :string;
             dob:string;
             gender:string;
             price:string ;
             reg:string;
             imgURL:string;
  }

 export function PetItem(item: Pet){
  var petName:string;

  const dispatch = useAppDispatch();
  
  async function deletePet(id: number)
  {
    await Axios.delete("https://petstorebackend-production.up.railway.app/api/animals/"+id);
  }
        const isAdmin = useAppSelector((state)=> state.user.admin);
        var admin,petId;
        if(isAdmin.toString() == "true")
        {
          admin = <div>
            <LinkContainer to="/PetEdit">
            <Button variant="warning" onClick={()=>{petId = item.id; dispatch(setPetId(petId))}}>Edit</Button>
            </LinkContainer>
            <Button variant="danger" onClick= {() => deletePet(item.id)}>Delete</Button>
            
          </div>
        }
        else
        {
          admin= <div></div>
        }
  return(
    <Card style={{ width: "100%", height: "100%", boxShadow: "10px 5px 5px black" }}>
          <Card.Img variant="top" src={item.imgURL} style={{ width: "100%", height: "10rem" }} />
          <Card.Body style={{ alignItems: "center", justifyContent: "center" }}>
            <Row>
              <Col>
                <Card.Title> Name:</Card.Title>
              </Col>
              <Col>
                <Card.Title>{item.name}</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Subtitle>Animal Type:</Card.Subtitle>
              </Col>
              <Col>
                <Card.Subtitle>{item.category}</Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Subtitle>Animal Breed:</Card.Subtitle>
              </Col>
              <Col>
                <Card.Subtitle>{item.breed}</Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Subtitle>Animal Gender:</Card.Subtitle>
              </Col>
              <Col>
                <Card.Subtitle>{item.gender}</Card.Subtitle>
              </Col>
            </Row>
            <Row>
              <Col>
              <LinkContainer to={"/Adopt"}>
                <Button variant="primary" onClick={() => {petName = item.name; dispatch(setPetName(petName)); dispatch(setPetId(item.id))}}>
                  Adopt me! 
                </Button>
                </LinkContainer>
                {admin}
              </Col>
              <Col>
                <h4>{formatCurrency(parseInt(item.price))}</h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      
  );
 }
export default Pet;