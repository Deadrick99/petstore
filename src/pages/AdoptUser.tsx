import React from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Pet from "./Pet";

import { CardGroup } from "react-bootstrap";
import backGround from "./images/bg2.png";
import { formatCurrency } from "./utilities/formatCurrency";
import { LinkContainer } from "react-router-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { PetItem } from "./Pet";
import { setPetId, setPetName } from "../redux/petName";
import AdoptCard, { AdoptCardItem } from "./AdoptCard";




function AdminAdopt() {
  const [cards, setCards] = useState<Array<AdoptCard>>([]);
  var isImg = false;
  var imgPath: string | undefined;
  const userEmail = useAppSelector((state)=> state.user.email)
   
  useEffect(() => {
    const fetchCards = async () => {
      const response = await Axios.get("https://petstorebackend-production.up.railway.app/api/adoption");
      initAdopt(response.data);
      
    };
    fetchCards();
  }, []);
  const initAdopt = (data: string | any[]) => {
    
    let cardArr = new Array<AdoptCard>();
    for (let i = 0; i < data.length; i++) {
      if (data[i].IMAGEFILE !== null) {
        isImg = true;
      }
      if(userEmail == data[i].CustomerEmail)
      {
        const Card: AdoptCard = {
            id: data[i].Id,
            firstName:data[i].FirstName,
            lastName:data[i].LastName,
            email:data[i].EmailName,
            homeSize:data[i].HomeSize,
            hours:data[i].HoursDay,
            why:data[i].Why,
            animalId:data[i].AnimalId,
            approve:data[i].Approve
          
        };
    
        
        cardArr.push(Card);
    }
    }
    setCards(cardArr);
  };
  
  
    return (
      <div style={{ backgroundImage: `url(${backGround})`,height:"100%",width:"100%" }}>
      <Row className="mx-auto">
         {cards.map((item) => (
          <Col sm={4} lg={3} className="m-3 mx-auto p-3" key={item.id}>
            <AdoptCardItem {...item}></AdoptCardItem>
          </Col>
        ))}
      </Row>
    </div>
    );
}

export default AdminAdopt;
