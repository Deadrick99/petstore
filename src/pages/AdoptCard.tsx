import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";
import { formatCurrency } from "./utilities/formatCurrency";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Axios from "axios";
import { setApprove, setItemId } from "../redux/petName";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect } from "react";
interface AdoptCard {
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    homeSize:string,
    hours:string,
    why:string,
    animalId:string,
    approve:string
}
export  function AdoptCardItem(item:AdoptCard){
    var Category,Breed
   useEffect(() => {
    const fetchCards = async () => {
         const response = await Axios.get("https://petstorebackend-production.up.railway.app/api/animals/"+item.animalId);
         Category = response.data.Category;
         Breed =  response.data.Breed;
          };
    fetchCards();
  }, []);
   async function changeApprove(approve:string)
  {
    await Axios.patch("https://petstorebackend-production.up.railway.app/api/adoption/"+item.id,{
        "Approve":approve  
    })
  }
     const dispatch = useAppDispatch()
  const {getItemQuantity, increaseCartQuantity,decreaseCartQuantity,removeFromCart} =useShoppingCart()
        let cartAmount =getItemQuantity(item.id);
        const isAdmin = useAppSelector((state)=> state.user.admin);
        var cardAdmin,approve;
    if(isAdmin.toString() == "true")
        {
          cardAdmin = <div>
            
            <Button variant="warning" onClick={()=>{approve = "Approved"; changeApprove(approve)}}>Approve</Button>
            
            <Button variant="danger" onClick= {() =>{approve = "Denied"; changeApprove(approve)}}>Deny</Button>
            
          </div>
        }
        else
        {
          cardAdmin= <div></div>
        }
  return(
    <Card  style={{ width:'100%', height:'100%', boxShadow:'10px 5px 5px black' }}>
            <Card.Body>
               <Row>
                 <Col>  
                 <Card.Title> Application ID:</Card.Title>
                </Col>
                <Col>
                <Card.Title>{item.id}</Card.Title>
                </Col>
                </Row>
                <Row>
                 <Col>  
                 <Card.Title> Application Current Status:</Card.Title>
                </Col>
                <Col>
                <Card.Title>{item.approve}</Card.Title>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <Card.Subtitle>Applicant Name:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{item.firstName} {item.lastName}</Card.Subtitle>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Card.Subtitle>Applicant Email:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{item.email}</Card.Subtitle>
                </Col>
                </Row>
                   <Row>
                <Col>
                    <Card.Subtitle>Applicant Home Type:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{item.homeSize}</Card.Subtitle>
                </Col>
                </Row>
                   <Row>
                <Col>
                    <Card.Subtitle>Applicant Time:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{item.hours}</Card.Subtitle>
                </Col>
                </Row>
                   <Row>
                <Col>
                    <Card.Subtitle>Why Applicant is a good fit:</Card.Subtitle>
                    </Col>
                    </Row>
                    <Row>
                 <Col>  
                <Card.Subtitle>{item.why}</Card.Subtitle>
                </Col>
                </Row>
                  <Row>
                <Col>
                    <Card.Subtitle>Animal Info:</Card.Subtitle>
                    </Col>
                    </Row>
                     <Row>
                <Col>
                    <Card.Subtitle>Animal Type:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{Category}</Card.Subtitle>
                </Col>
                </Row>
                 <Row>
                <Col>
                    <Card.Subtitle>Animal Breed:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{Breed}</Card.Subtitle>
                </Col>
                </Row>
                        {cardAdmin}
            </Card.Body> 
            </Card>);
}
export default AdoptCard