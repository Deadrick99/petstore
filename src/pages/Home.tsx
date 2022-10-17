import image from "./images/pets2.png";
import {useEffect, useState} from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import { useAppDispatch, useAppSelector} from "../redux/hooks"
import {setVisited} from "../redux/visited";
import { useDispatch, useSelector } from "react-redux";
import { setViews } from "../redux/views";
import {setStart} from "../redux/time";
import { setPageStart } from "../redux/pageTime"; 

const Home = () => {
  /**
   * 1) set up the dispatcher to modify redux parameters
   * 2) get the email associated with the current user
   * 3) get the token associated with the current user
   */
  const userEmail = useSelector((state: any) => state.user.email);
  const userToken = useSelector((state: any) => state.user.token);
  const visited = useAppSelector((state) => state.visited.visited);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    if (visited === false)
    {
      dispatch(setVisited());
      console.log('user visited')
    }
    dispatch(setViews());
    dispatch(setStart());
    var d = new Date();
    dispatch(setPageStart(d.getTime()));

    console.log("Current User: " + userEmail);
    console.log("Current User Token: " + userToken);
},[])
  return (
       
      <div className="Home" >  
      <div className="row align-items-center vh-100">
      <Col sm={3} lg={2} className = "m-3 mx-auto p-3">
            <Card style={{ textAlign: 'center', width:'100%', height:'100%', boxShadow:'10px 5px 5px black' }}>
            <Row>
                 <Col>  
                 <Card.Title>Welcome to the Pet Store</Card.Title>
                </Col>
            </Row>
            </Card>
      </Col>
      </div>
      </div>
    
     
    
    
);
}

export default Home;
