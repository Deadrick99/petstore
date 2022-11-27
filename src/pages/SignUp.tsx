import Axios from "axios";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { z } from 'zod';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import backGround from "./images/bg2.png";

const FormGroupClass = 'm-2';
const Params = ['email', 'password'];
const Schemas = {
    email: z.string({
        required_error: 'Email should be non-empty',
        invalid_type_error: 'Email must be a string'
    }).trim().email({
        message: 'Email should be a valid address'
    }),
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    }).trim().min(5, {
        message: 'Password should be non-empty'
    }),
};

const API_URL = "https://petstorebackend-production.up.railway.app/api/signup";

/**
 * create and manage the operation of the sign up page
 * 
 * @returns a tsx website that represents the structure behind the sign-up page
 */
const SignUp = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email:           { error: null, isValid: true, message: '', value: ''},
        password:        { error: null, isValid: true, message: '', value: ''},
        password_verify: { error: null, isValid: true, message: '', value: ''},
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
     * submit the user's desired account information to the backend
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
                    password: String(form.password.value),
                }
            )
            updateField(
                'server_response',
                response,
                true,
                response.data
            );

            /**
             * Assuming the aforementioned code ran without error, we can
             * safely assume the account was successfully created so we can
             * redirect to the login page
             */
            navigate('/login')
        }
        catch (error: any)
        {
            updateField(
                'server_response',
                error.response,
                false,
                error.response.data
            );
            return
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
         * Validate the password verification field
         */
        if (form.password.value != form.password_verify.value)
        {
            let error_message = "Passwords do not match."
            updateField(
                'password_verify',
                EvalError(error_message),
                false, 
                error_message
            );
            valid = false;
        }
        else
        {
            updateField('password_verify', null, true, '');
        }
        
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
                    <Col md={7} className='justify-content-center'>
                        <Form>
                            {/**
                             * Email Address Field
                             */}
                            <Form.Group className={FormGroupClass} controlId='formSigUpEmail'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
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
                                    type="password"
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
                             * Password Verification Field
                            */}
                            <Form.Group className={FormGroupClass} controlId='formSignUpPasswordVerify'>
                                <Form.Label>Password Verification</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder='Enter your password again...'
                                    value={form.password_verify.value}
                                    onChange={(e) => setFieldValue('password_verify', e.target.value)}
                                    isInvalid={!form.password_verify.isValid}
                                />
                                {!form.password_verify.isValid &&
                                    <Form.Text className='text-danger'>
                                        {form.password_verify.message}
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
                            <Button className="m-2" variant='primary' type="submit" onClick={handleSubmit}>
                                Sign Up
                            </Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default SignUp;