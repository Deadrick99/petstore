import Axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import Dog from "./images/dog.png";
import DogMerch from "./images/dogMerch.png";
import CardGroup from "react-bootstrap/esm/CardGroup";
import Merch, { MerchItem } from "./Merch";
import backGround from "./images/bg2.png";
import { formatCurrency } from "./utilities/formatCurrency";

function Merchs() {
  const [merch, setMerch] = useState<Array<Merch>>([]);
  var isImg = false;
  var imgPath: string | undefined;

  useEffect(() => {
    const fetchPets = async () => {
      const response = await Axios.get("https://petstorebackend-production.up.railway.app/api/merchandise");
      initPets(response.data);
    };
    fetchPets();
  }, []);
  const initPets = (data: string | any[]) => {
    let merchArr = new Array<Merch>();
    for (let i = 0; i < data.length; i++) {
      if (data[i].IMAGEFILE !== null) {
        isImg = true;
      }
      if (data[i].Category === "Dog") {
        const Merch: Merch = {
          id: data[i].Id,
          description: data[i].Description,
          category: data[i].Category,
          quantity: data[i].QuantityOnHand,
          price: data[i].ListPrice,
          cartAmount: 0,
          imgURL: DogMerch,
        };

        merchArr.push(Merch);
      }
    }
    setMerch(merchArr);
  };

  return (
    <div style={{ backgroundImage: `url(${backGround})` }}>
      <Row className="mx-auto">
        {merch.map((item) => (
          <Col sm={4} lg={3} className="m-3 mx-auto p-3" key={item.id}>
            <MerchItem {...item}></MerchItem>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Merchs;
