import React from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect,useState } from "react";
import Pet from "./Pet";


function Pets () 
{
    const [pets,setPets]= useState<Pet[]>([]);
    useEffect(()=>{
        const fetchPets = async() => {
            
                const response = await Axios.get("http://petstoretest-production.up.railway.app/api/animals");
                initPets(response.data)
                console.log("hi")
        }
        fetchPets();
    }) 
    const initPets = (data: string | any[])=>
    {
        for(let i = 0; i<data.length;i++)
        {
            let pets = new Array; 
            const Pet: Pet={
            id :data[i].ANIMALID,
            name :data[i].NAME,
            category :data[i].CATEGORY, 
            breed :data[i].BREED,
            dob :data[i].DATEBORN,
            gender :data[i].GENDER,
            img :data[i].IMAGEFILE,
            imgH :data[i].IMAGEHEIGHT, 
            imgW :data[i].IMAGEWIDTH,
            price :data[i].LISTPRICE,
            photo :data[i].PHOTO,
            reg: data[i].REGISTERED,
            
        }
        console.log(Pet.name)
            pets.push(Pet);
        }
        setPets(pets);
       
    }
    const petCards = pets.map(Pet =>{
        return(
            <Col sm={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{Pet.name}</Card.Title>
                <Card.Subtitle>{Pet.category}</Card.Subtitle>
                <Card.Subtitle>{Pet.breed}</Card.Subtitle>
                <Card.Subtitle>{Pet.gender}</Card.Subtitle>
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