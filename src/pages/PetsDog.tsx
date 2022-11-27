import React from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect,useState } from "react";
import Pet from "./Pet";
import Dog from "./images/dog.png"
import CardGroup from "react-bootstrap/esm/CardGroup";
import backGround from "./images/bg2.png";
import { formatCurrency } from "./utilities/formatCurrency";
import { LinkContainer } from "react-router-bootstrap";
 

function Pets () 
{
    const [pets,setPets]= useState<Array<Pet>>([]);
     var isImg = false;
     var imgPath: string | undefined;
     
    useEffect(()=>{
        const fetchPets = async() => {
            
                const response = await Axios.get("https://petstorebackend-production.up.railway.app/api/animals");
                initPets(response.data)
               
        }
        fetchPets();
    },[]) 
    const initPets = (data: string | any[])=>
    {
        let petsArr = new Array<Pet>; 
        for(let i = 0; i<data.length;i++)
        {
           
            if (data[i].IMAGEFILE !== null){
                isImg = true;
            }
            if(data[i].Category === "Dog"){
           
            const Pet: Pet={
                id: data[i].Id,
                name: data[i].Name,
                category: data[i].Category,
                breed: data[i].Breed,
                dob: data[i].DateBorn,
                gender: data[i].Gender,
                price: data[i].ListPrice,
                reg: data[i].Registerd,
            }
        
            petsArr.push(Pet);
        }
    }
        setPets(petsArr);
       
    }
    const petCards = pets.map(Pet =>{
        return(
            <Col sm={4} lg={3} className = "m-3 mx-auto p-3" key={Pet.id} >
            <Card  style={{ width:'100%', height:'100%', boxShadow:'10px 5px 5px black' }}>
            <Card.Img variant="top" src={Dog} style={{ width :'100%',height:"10rem"}}/>
            <Card.Body>
               <Row>
                 <Col>  
                 <Card.Title> Name:</Card.Title>
                </Col>
                <Col>
                <Card.Title>{Pet.name}</Card.Title>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <Card.Subtitle>Animal Type:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{Pet.category}</Card.Subtitle>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <Card.Subtitle>Animal Breed:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{Pet.breed}</Card.Subtitle>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <Card.Subtitle>Animal Gender:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{Pet.gender}</Card.Subtitle>
                </Col>
                </Row>
                
                <Row>
                    <Col>
                <LinkContainer to={"/Adopt"}>
                <Button variant="primary">
                  Adopt me!
                </Button>
                </LinkContainer>
                </Col>
                 <Col>
                <h4>{formatCurrency(parseInt(Pet.price))}</h4>
                </Col>
                </Row>
            </Card.Body> 
            </Card>
            </Col>
            
        )
    }) 
    return(
        <div style={{backgroundImage:`url(${backGround})`}}>
            
           <Row  className="mx-auto" >
            <CardGroup >
            {petCards}
            </CardGroup>
            </Row> 
            
        </div>
    )
}

export default Pets;