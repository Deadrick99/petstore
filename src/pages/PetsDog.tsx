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
 

function Pets () 
{
    const [pets,setPets]= useState<Array<Pet>>([]);
     var isImg = false;
     var imgPath: string | undefined;
     
    useEffect(()=>{
        const fetchPets = async() => {
            
                const response = await Axios.get("http://petstoretest-production.up.railway.app/api/animals");
                initPets(response.data)
                console.log("hi")
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
            if(data[i].CATEGORY === "Dog"){
           
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
        
            console.log(Pet.category)
            petsArr.push(Pet);
        }
    }
        setPets(petsArr);
        console.log({pets});
    }
    const petCards = pets.map(Pet =>{
        return(
            <Col sm={4} lg={3}>
            <Card style={{ width:'18rem', height:'18rem' }}>
            <Card.Img variant="top" src={Dog} style={{ width :'18rem',height:"8rem"}}/>
            <Card.Body>
                <Card.Title>{Pet.name}</Card.Title>
                <Card.Subtitle>{Pet.category}</Card.Subtitle>
                <Card.Subtitle>{Pet.breed}</Card.Subtitle>
                <Card.Subtitle>{Pet.gender}</Card.Subtitle>
                <Row>
                    <Col>
                <Button variant="primary" href="/Adopt">Adopt me!</Button>
                </Col>
                 <Col>
                <h4>${Pet.price}</h4>
                </Col>
                </Row>
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