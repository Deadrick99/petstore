import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AdoptStyle.css";
import { Formik, useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {basicSchema} from "../schemas/YupSchema"
import backGround from "./images/bg2.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Axios from "axios";
import { send } from "vite";

const onSubmit = async (values: any , actions: { resetForm: () => void; }) =>{
    
  await new Promise ((resolve) => setTimeout(resolve,2000));
  actions.resetForm();

}
function MerchEdit() {
  const isAdmin = useAppSelector((state) => state.user.admin)
  
  const formik = useFormik({
    initialValues: {
      description:"",
      quantity:0,
      price:0,
    },
    
    validationSchema: basicSchema,
    onSubmit,
  });
  var admin;
  const itemId = parseInt(useAppSelector((state) => state.petName.itemId))
  const send = async() =>
  {
    console.log("hi")
      await Axios.patch(
                "https://petstorebackend-production.up.railway.app/api/merchandise/"+parseInt(itemId.toString()), {
                        
                         "Description": formik.values.description,
                        "QuantityOnHand": parseInt(formik.values.quantity.toString()),
                        "ListPrice":parseInt(formik.values.price.toString())
                }
            )
  }
  if(isAdmin.toString() == "true")
  {
    admin =
    <Form onSubmit= {formik.handleSubmit} className="rounded p-4 p-sm-3">
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                id="description"
                type="text"
                placeholder="Enter description"
                name="description"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                value={formik.values.description}
                onBlur={formik.handleBlur}
                className={formik.errors.description && formik.touched.description ? "border-danger" : ''}
              ></Form.Control>
              {formik.errors.description && formik.touched.description &&<p className={"text-danger"}> {formik.errors.description}</p>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter amount"
                name="quantity"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                onBlur={formik.handleBlur}
                value={formik.values.quantity}
                className={formik.errors.quantity && formik.touched.quantity ? "border-danger" : ''}
              ></Form.Control>
              {formik.errors.quantity && formik.touched.quantity &&<p className={"text-danger"}> {formik.errors.quantity}</p>}
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
        </Row>
        <Button disabled={formik.isSubmitting} onClick={()=>send()} variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
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
export default MerchEdit;
