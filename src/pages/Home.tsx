import image from "./images/pets2.png";
import image2 from "./images/petstorelogo1.png";
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
import Carousel from 'react-bootstrap/Carousel';

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
      <Carousel>
      <Carousel.Item>
            <img
              className="d-block mx-auto"
              style={{ height: 800 }}
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?format=jpg&width=960"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Thank you for visiting our website!</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block mx-auto"
              style={{ height: 800 }}
              src="https://vetsource.com/wp-content/uploads/2018/11/img-pet-adoption-101.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Find your next best friend</h1>
              <h2>Adoption applications are open now!</h2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block mx-auto"
              style={{ height: 800 }}
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F07%2F31%2Fvarious-pet-toys-00c3ec73.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Need some merch?</h1>
              <h2>Check out our selection of collars, kennels, and more!</h2>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
);
}

export default Home;
