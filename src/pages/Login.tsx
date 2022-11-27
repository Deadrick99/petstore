import Axios from "axios";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { z } from 'zod';
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import backGround from "./images/bg2.png";

import { useDispatch, useSelector } from "react-redux";
import { setEmail, setToken } from "../redux/user";

const FormGroupClass = 'm-2';
const Params = ['email', 'password'];
const Schemas = {
    email: z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string'
    }).trim().email({
        message: 'Email should be a valid address'
    }),
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    }).trim().min(5, {message: 'Password should be non-empty'})
};

const API_URL = "https://petstorebackend-production.up.railway.app/api/login";

/**
 * create and manage the operation of the login page
 * 
 * @returns a tsx website that represents the structure behind the login page
 */
const Login = () => {
    /**
     * 1) set up the dispatcher to modify redux parameters
     * 2) get the email associated with the current user
     * 3) get the token associated with the current user
     */
    const dispatch = useDispatch();
    const userEmail = useSelector((state: any) => state.user.email);
    const userToken = useSelector((state: any) => state.user.token);

    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: {error: null, isValid: true, message: '', value: ''},
        password: {error: null, isValid: true, message: '', value: ''},
        server_response: { error: null, isValid: true, message: '', value: ''},
    });

    /**
     * update the specified field's value with the argued value
     * 
     * @param field: a string that specifies the desired fields
     * @param value: an object that represents the new value for the field
     */
    const setFieldValue = (field: string, value: any) => {
        var f = form;
        var fieldKey = field as keyof typeof form;
        f[fieldKey].value = value;
        setForm({...f});
    }

    /**
     * update all sub-fields within a specified form field except the value
     * 
     * @param field: a string that specifies the desired field
     * @param error: any type of error object from the most recent manipulation
     * @param isValid: a boolean that specifies if the field if value
     * @param message: a message that verbally describes the error
     */
    const updateField = (field: string, error: any, isValid: boolean, message: string) => {
        var f = form;
        var fieldKey = field as keyof typeof form;
        f[fieldKey].error = error;
        f[fieldKey].isValid = isValid;
        f[fieldKey].message = message;
        setForm({...f});
    }

    /**
     * submit the user's login information to the backend
     * 
     * @returns null
     */
    const submitForm = async () => {
        let response;

        try
        {
            response = await Axios.post(
                API_URL, {
                    email: String(form.email.value),
                    password: String(form.password.value)
                }
            );
            updateField(
                'server_response',
                response,
                true,
                response.data
            );

            dispatch(setEmail(form.email.value));
            dispatch(setToken(form.server_response.message));

            /**
             * Assuming the aforementioned code ran without error, we can
             * safely assume the user was able to login so we will redirect
             * them to the home page
             */
            navigate('/');
        }
        catch (error: any)
        {
            console.log("Invalid Login")
            updateField(
                'server_response',
                error.response,
                false,
                error.response.data
            );
            return;
        }
    }

    /**
     * process the form's information following submission
     * 
     * @param event: a button click event from the submit button
     */
    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        let valid: boolean = true;

        /**
         * Validate all form fields except for the password verification field
         */
        Params.forEach(function (field, _) {
            var schemaKey = field as keyof typeof Schemas;
            var formKey = field as keyof typeof form;
            try
            {
                let value = Schemas[schemaKey].parse(form[formKey].value);
                setFieldValue(field, value);
                updateField(field, null, true, '');
            } catch(error: any) {
                updateField(field, error, false, String(error.issues[0].message));
                valid = false;
            }
        })

        /**
         * If the form is valid, submit the username and password to the 
         * backend to attempt to make an account
         */
         if (valid == true) { 
            submitForm(); 
        }

        event.preventDefault();
    };

    return ( 
        <div style={{backgroundImage:`url(${backGround})`}}>
            <Container className="vh-100 d-flex flex-column">
                <Row className='justify-content-center p-3'>
                    <Col md={7}>
                        <Form>
                            {/**
                             * Email Address Field
                             */}
                            <Form.Group className={FormGroupClass} controlId='formSigUpEmail'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter your email address...'
                                    value={form.email.value}
                                    onChange={(e) => setFieldValue('email', e.target.value)}
                                    isInvalid={!form.email.isValid}
                                />
                                {!form.email.isValid &&
                                    <Form.Text className='text-danger'>
                                        {form.email.message}
                                    </Form.Text>
                                }
                            </Form.Group>

                            {/**
                             * Password Field
                            */}
                            <Form.Group className={FormGroupClass} controlId='formSignUpPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='Enter your password...'
                                    value={form.password.value}
                                    onChange={(e) => setFieldValue('password', e.target.value)}
                                    isInvalid={!form.password.isValid}
                                />
                                {!form.password.isValid &&
                                    <Form.Text className='text-danger'>
                                        {form.password.message}
                                    </Form.Text>
                                }
                            </Form.Group>

                            {/**
                             * Server Error Messages
                            */}
                            <Form.Group className={FormGroupClass} controlId='formServerResponses'>
                                {!form.server_response.isValid &&
                                    <Form.Text className='text-danger'>
                                        {form.server_response.message}
                                    </Form.Text>
                                }
                            </Form.Group>

                            {/**
                             * Buttons
                             */}
                            <Button className='m-2' variant='primary' type="submit" onClick={handleSubmit}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
  
export default Login;