import { Button, Card, Col, Row } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";
import { formatCurrency } from "./utilities/formatCurrency";

interface Merch  {
             id: number;
             description : string ;
             quantity:number; 
             category :string;
             price: string;
             cartAmount:number;
             imgURL:string;
             
  }
export function MerchItem(item: Merch){
  const {getItemQuantity, increaseCartQuantity,decreaseCartQuantity,removeFromCart} =useShoppingCart()
        let cartAmount =getItemQuantity(item.id);
  return(
    <Card  style={{ width:'100%', height:'100%', boxShadow:'10px 5px 5px black' }}>
            <Card.Img variant="top" src={item.imgURL} style={{ width :'100%',height:"10rem"}}/>
            <Card.Body>
               <Row>
                 <Col>  
                 <Card.Title> Description:</Card.Title>
                </Col>
                <Col>
                <Card.Title>{item.description}</Card.Title>
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
                <h4>{formatCurrency(parseInt(item.price))}</h4>
                </Col>
                </Row>
                <div className="mt-auto">
                    {cartAmount ===0 ?(
                        <Button variant="primary" onClick={() =>increaseCartQuantity(item, item.id)}>Add to cart</Button>
                    ):<div className="d-flex align-items-center flex-column" style ={{gap: ".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style ={{gap: ".5rem"}}>
                            <Button onClick={() =>decreaseCartQuantity(item, item.id)}>-</Button>
                            <div>
                                <span className="fs-3">{cartAmount}</span> in cart
                                </div>
                            <Button onClick={() =>increaseCartQuantity(item, item.id)}>+</Button>

                        </div>
                        <Button onClick={() =>removeFromCart(item)} variant="danger" size="sm"> Remove</Button>
                        </div>}
                </div>
            </Card.Body> 
            </Card>
  )
}

export default Merch;