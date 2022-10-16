import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { z } from 'zod';

import 'bootstrap/dist/css/bootstrap.min.css';
import backGround from "./images/pawprints.png";



const FormGroupClass = 'mb-3';
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


const Login = () => {
    const [form, setForm] = useState({
        email: {error: null, isValid: true, message: '', value: ''},
        password: {error: null, isValid: true, message: '', value: ''}
    });

    const setFieldValue = (field: string, value: any) => {
        var f = form;
        var fieldKey = field as keyof typeof form;
        f[fieldKey].value = value;
        setForm({...f});
    }
    
    const updateField = (field: string, error: any, isValid: boolean, message: string) => {
        var f = form;
        var fieldKey = field as keyof typeof form;
        f[fieldKey].error = error;
        f[fieldKey].isValid = isValid;
        f[fieldKey].message = message;
        setForm({...f});
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
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
            }
        })

        event.preventDefault();
    };

    return ( 
        <div style={{backgroundImage:`url(${backGround})`}}>
        <Container>
            <Row className='justify-content-center'>
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
                         * Buttons
                         */}
                        <Button variant='primary' type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
    )
};
  
export default Login;