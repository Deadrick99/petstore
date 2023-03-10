import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AdoptStyle.css";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {basicSchema} from "../schemas/YupSchema"
import backGround from "./images/bg2.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import  Axios  from "axios";

const onSubmit = async (values: any , actions: { resetForm: () => void; }) =>{
  await new Promise ((resolve) => setTimeout(resolve,2000));
  actions.resetForm();
 
}
function Adopt() {
   const send = async() =>
  {
    console.log('hello')
      await Axios.post(
                "https://petstorebackend-production.up.railway.app/api/adoption",{
                        "FirstName":formik.values.firstName,
                        "LastName":formik.values.lastName,
                        "EmailName":formik.values.email,
                        "HomeSize":formik.values.homeSize,
                        "HoursDay":formik.values.hours,
                        "Why":formik.values.about,
                        "CustomerEmail":email,
                        "Approve":"Pending",
                        "AnimalId":petId,
                         
                }
            )
    
  }
  const email = useAppSelector((state)=>state.user.email)
  const petId = useAppSelector((state) => state.petName.petId)
  const petName1 = useAppSelector((state) => state.petName.petName)
  const isLoggedIn = useAppSelector((state)=> state.user.loggedIn)
  var loggedIn;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      homeSize: "",
      hours: "",
      email: "",
      about: "",
    },
    
    validationSchema: basicSchema,
    onSubmit,
  });
  if(isLoggedIn)
  {
    loggedIn =  <Form onSubmit= {formik.handleSubmit} className="rounded p-4 p-sm-3">
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                className={formik.errors.firstName && formik.touched.firstName ? "border-danger" : ''}
              ></Form.Control>
              {formik.errors.firstName && formik.touched.firstName &&<p className={"text-danger"}> {formik.errors.firstName}</p>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className={formik.errors.lastName && formik.touched.lastName ? "border-danger" : ''}
              ></Form.Control>
              {formik.errors.lastName && formik.touched.lastName &&<p className={"text-danger"}> {formik.errors.lastName}</p>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                /* Set onChange to handleChange */
                onChange={formik.handleChange}
                /* Set onBlur to handleBlur */
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={formik.errors.email && formik.touched.email ? "border-danger" : ''}
              />
              {formik.errors.email && formik.touched.email &&<p className={"text-danger"}> {formik.errors.email}</p>}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Home size</Form.Label>

            <Form.Select
              aria-label="Default select example"
              name="homeSize"
              /* Set onChange to handleChange */
              onChange={formik.handleChange}
              /* Set onBlur to handleBlur */

              value={formik.values.homeSize}
              onBlur={formik.handleBlur}
            >
              <option value ="">What type of home do you have?</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo/Townhouse">Condo/Townhouse</option>
              <option value="House">House</option>
              className={formik.errors.homeSize && formik.touched.homeSize ? "border-danger" : ''}
            </Form.Select>
            {formik.errors.homeSize && formik.touched.homeSize &&<p className={"text-danger"}> {formik.errors.homeSize}</p>}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Hours(Day) to spend with your pet.</Form.Label>

            <Form.Select
              aria-label="Default select example"
              name="hours"
              /* Set onChange to handleChange */
              onChange={formik.handleChange}
              /* Set onBlur to handleBlur */
              onBlur={formik.handleBlur}
              value={formik.values.hours}
            >
              <option value ="">Please select hours.</option>
              <option value="0-1">0-1</option>
              <option value="1-2">1-2</option>
              <option value="3+">3+</option>
              className={formik.errors.hours && formik.touched.hours ? "border-danger" : ''}
            </Form.Select>
            {formik.errors.hours&& formik.touched.hours &&<p className={"text-danger"}> {formik.errors.hours}</p>}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
           
            >
              <Form.Label>
                Please tell us why you would like to adopt {petName1}.
              </Form.Label>
              <Form.Control as="textarea" rows={5} 
              name="about"
              /* Set onChange to handleChange */
              onChange={formik.handleChange}
              /* Set onBlur to handleBlur */
              onBlur={formik.handleBlur}
              value={formik.values.about}
              className={formik.errors.about && formik.touched.about ? "border-danger" : ''}/>
              {formik.errors.about && formik.touched.about &&<p className={"text-danger"}> {formik.errors.about}</p>}
            </Form.Group>
          </Col>
        </Row>
        <Button disabled={formik.isSubmitting} onClick={()=>send()} variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
  }
  else{
    loggedIn= <div>Must be looged in to subbmit adopt application.</div> 
  }
  return (
    <div
      className="color-overlay d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundImage:`url(${backGround})` }}
    >
     {loggedIn}
    </div>
  );
}
export default Adopt;
