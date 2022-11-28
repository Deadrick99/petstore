import React from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Pet, { PetItem } from "./Pet";
import Other from "./images/petParadiseLogo2.png";
import CardGroup from "react-bootstrap/esm/CardGroup";
import backGround from "./images/bg2.png";
import { formatCurrency } from "./utilities/formatCurrency";
import { LinkContainer } from "react-router-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setPetName } from "../redux/petName";



function Pets() {
  const [pets, setPets] = useState<Array<Pet>>([]);
  var isImg = false;
  var imgPath: string | undefined;
   
  useEffect(() => {
    const fetchPets = async () => {
      const response = await Axios.get("https://petstorebackend-production.up.railway.app/api/animals");
      initPets(response.data);
      
    };
    fetchPets();
  }, []);
  const initPets = (data: string | any[]) => {
    let petsArr = new Array<Pet>();
    for (let i = 0; i < data.length; i++) {
      if (data[i].IMAGEFILE !== null) {
        isImg = true;
      }
      if (data[i].Category !== "Cat" && data[i].Category !== "Dog") {
        const Pet: Pet = {
          id: data[i].Id,
          name: data[i].Name,
          category: data[i].Category,
          breed: data[i].Breed,
          dob: data[i].DateBorn,
          gender: data[i].Gender,
          price: data[i].ListPrice,
          reg: data[i].Registerd,
          imgURL: Other,
        };
        
        petsArr.push(Pet);
      }
    }
    setPets(petsArr);
  };
  
  
    return (
      <div style={{ backgroundImage: `url(${backGround})` }}>
      <Row className="mx-auto">
         {pets.map((item) => (
          <Col sm={4} lg={3} className="m-3 mx-auto p-3" key={item.id}>
            <PetItem {...item}></PetItem>
          </Col>
        ))}
      </Row>
    </div>
    );
}

export default Pets;