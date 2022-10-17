import Axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect,useState } from "react";

import Other from "./images/petstorelogo1.png"
import CardGroup from "react-bootstrap/esm/CardGroup";
import Merch from "./Merch";
 import backGround from "./images/pawprints.png";

function Merchs () 
{
    const [merch,setMerch]= useState<Array<Merch>>([]);
     var isImg = false;
     var imgPath: string | undefined;
     
    useEffect(()=>{
        const fetchPets = async() => {
            
                const response = await Axios.get("http://petstoretest-production.up.railway.app/api/merchandise");
                initPets(response.data)
             
        }
        fetchPets();
    },[]) 
    const initPets = (data: string | any[])=>
    {
        let merchArr = new Array<Merch>; 
        for(let i = 0; i<data.length;i++)
        {
           
            if (data[i].IMAGEFILE !== null){
                isImg = true;
            }
            if(data[i].CATEGORY !== "Dog" && data[i].CATEGORY !== "Cat"){
           
            const Merch: Merch={
                id :data[i].ANIMALID,
                description :data[i].DESCRIPTION,
                category :data[i].CATEGORY, 
                quantity : data[i].QUANTITY,
                price :data[i].LISTPRICE,
                
            }
        
          
            merchArr.push(Merch);
        }
    }
        setMerch(merchArr);
     
    }
    const petCards = merch.map(Merch =>{
        return(
            <Col sm={4} lg={3} className = "m-3 mx-auto p-3" key={Merch.id} >
            <Card  style={{ width:'100%', height:'100%' , boxShadow:'10px 5px 5px black'}}>
            <Card.Img variant="top" src={Other} style={{ width :'100%',height:"10rem"}}/>
            <Card.Body>
               <Row>
                 <Col>  
                 <Card.Title> Description:</Card.Title>
                </Col>
                <Col>
                <Card.Title>{Merch.description}</Card.Title>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <Card.Subtitle>Animal Type:</Card.Subtitle>
                    </Col>
                 <Col>  
                <Card.Subtitle>{Merch.category}</Card.Subtitle>
                </Col>
                </Row>
                <Row>
                    <Col>
                <Button variant="primary" >Add to cart</Button>
                </Col>
                 <Col>
                <h4>${Merch.price}</h4>
                </Col>
                </Row>
            </Card.Body> 
            </Card>
            </Col>
            
        )
    }) 
    return(
        <div style={{backgroundImage:`url(${backGround})`}}>
            
           <Row  className="mx-auto">
            <CardGroup >
            {petCards}
            </CardGroup>
            </Row> 
            
        </div>
    )
}

export default Merchs;