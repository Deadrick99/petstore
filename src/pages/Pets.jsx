import React from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect,useState } from "react";


function Pets () 
{
    const [pets,setPets]= useState([]);
    useEffect(()=>{
        const fetchPets = async() => {
            
                const response = await Axios.get("http://petstoretest-production.up.railway.app/api/animals");
                initPets(response.data)

        }
        fetchPets();
    },[]) 
    const initPets = (data)=>
    {
        for(let i = 0; i<data.length;i++)
        {
            const pet = new Array;
            pet.id = data[i].ANIMALID;
            pet.name = data[i].NAME;
            pet.category = data[i].CATEGORY;
            pet.breed = data[i].BREED; 
            pet.dob = data[i].DATEBORN;
            pet.gender = data[i].GENDER;
            pet.img = data[i].IMAGEFILE;
            pet.imgH = data[i].IMAGEHEIGHT;
            pet.imgW = data[i].IMAGEWIDTH;
            pet.price = data[i].LISTPRICE;
            pet.photo = data[i].PHOTO;
            pet.reg = data[i].REGISTERED;
            pets.push(pet);
        }
        setPets(pets);
       
    }
    const petCards = pets.map(pet =>{
        return(
            <Col sm={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Subtitle>{pet.category}</Card.Subtitle>
                <Card.Subtitle>{pet.breed}</Card.Subtitle>
                <Card.Subtitle>{pet.gender}</Card.Subtitle>
                <Button variant="primary" href="/Adopt">Adopt me!</Button>
            </Card.Body> 
            </Card>
            </Col>
        )
    })
    return(
        <div>
           <Row>
            {petCards}
            </Row> 
        </div>
    )
}

export default Pets;