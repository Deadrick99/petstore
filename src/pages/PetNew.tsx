import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AdoptStyle.css";
import { Formik, useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {basicSchema, merchSchema, petSchema} from "../schemas/YupSchema"
import backGround from "./images/bg2.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Axios from "axios";
import { send } from "vite";
import { LinkContainer } from "react-router-bootstrap";

const onSubmit = async (values: any , actions: { resetForm: () => void; }) =>{
  actions.resetForm();
  console.log("submit")
}
function PetNew() {
  const isAdmin = useAppSelector((state) => state.user.admin)
  
  const formik = useFormik({
    initialValues: {
      name:"",
      category:"",
      breed:"",
      gender:"",
      price:""
    },
    
    validationSchema: petSchema,
    onSubmit,
  });
  var admin;
  const itemId = parseInt(useAppSelector((state) => state.petName.petId))
  
  const send = async() =>
  {
    console.log(itemId)
      await Axios.post(
                "https://petstorebackend-production.up.railway.app/api/animals", {
                        
                         "Name": formik.values.name,
                         "Category": formik.values.category,
                         "Breed": formik.values.breed,
                         "Gender": formik.values.gender,
                        "ListPrice":parseInt(formik.values.price.toString()),
                        "DateBorn":"2004-05-04T20:00:00.000-04:00",
                }
            )
    
  }
  if(isAdmin.toString() == "true")
  {
    admin =<div>
    <Form onSubmit= {formik.handleSubmit} className="rounded p-4 p-sm-3">
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                placeholder="Enter name"
                name="name"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                value={formik.values.name}
                onBlur={formik.handleBlur}
                className={formik.errors.name && formik.touched.name ? "border-danger" : ''}
              ></Form.Control>
              {formik.errors.name && formik.touched.name &&<p className={"text-danger"}> {formik.errors.name}</p>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Animal Breed</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter amount"
                name="breed"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                onBlur={formik.handleBlur}
                value={formik.values.breed}
                className={formik.errors.breed && formik.touched.breed ? "border-danger" : ''}
              ></Form.Control>
              {formik.errors.breed && formik.touched.breed &&<p className={"text-danger"}> {formik.errors.breed}</p>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" >
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="price"
                placeholder="Enter price"
                name="price"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                onBlur={formik.handleBlur}
                value={formik.values.price}
                className={formik.errors.price && formik.touched.price ? "border-danger" : ''}
              />
              {formik.errors.price && formik.touched.price &&<p className={"text-danger"}> {formik.errors.price}</p>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" >
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="category"
                placeholder="Enter category"
                name="category"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                onBlur={formik.handleBlur}
                value={formik.values.category}
                className={formik.errors.category && formik.touched.category ? "border-danger" : ''}
              />
              {formik.errors.category && formik.touched.category &&<p className={"text-danger"}> {formik.errors.category}</p>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" >
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="gender"
                placeholder="Enter category"
                name="gender"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                onBlur={formik.handleBlur}
                value={formik.values.gender}
                className={formik.errors.gender && formik.touched.gender ? "border-danger" : ''}
              />
              {formik.errors.gender && formik.touched.gender &&<p className={"text-danger"}> {formik.errors.gender}</p>}
            </Form.Group>
          </Col>
        </Row>
        
        <Button disabled={formik.isSubmitting} onClick={()=>send()} variant="primary" type="submit" >
          Submit
        </Button>
        
      </Form>
      </div>
  }
  else
  {
    admin = <div>Please log in as admin to access this page</div>
  }
  return (
    <div
      className="color-overlay d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundImage:`url(${backGround})` }}
    >
      {admin}
    </div>
  );
}
export default PetNew;