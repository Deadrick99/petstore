import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    // Styling Parameters
    const FormGroupClass = 'mb-3';

    const [form, setForm] = useState({
        email: {
            error: null,
            isValid: false,
            message: '',
            value: ''
        },
        password: {
            error: null,
            isValid: false,
            message: '',
            value: ''
        }});

    const setFieldError = (field: string, value: any) => {
        var f = form;
        var fieldKey = field as keyof typeof form;
        f[fieldKey].error = value;
        setForm({...f});
    }

    const setFieldIsValid = (field: string, value: any) => {
        var f = form;
        var fieldKey = field as keyof typeof form;
        f[fieldKey].isValid = value;
        setForm({...f});
    }

    const setFieldMessage = (field: string, value: any) => {
        var f = form;
        var fieldKey = field as keyof typeof form;
        f[fieldKey].message = value;
        setForm({...f});
    }

    const setFieldValue = (field: string, value: any) => {
        var f = form;
        var fieldKey = field as keyof typeof form;
        f[fieldKey].value = value;
        setForm({...f});
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setFieldError('email', null);
        setFieldIsValid('email', true);
        setFieldMessage('email', null);
        yup.string()
            .email()
            .required()
            .validate(form.email)
            .catch((e) => {
                form.email.error = e;
                form.email.isValid = false;
                form.email.message = 'email address is invalid'
            })
        
        setFieldError('password', null);
        setFieldIsValid('password', true);
        setFieldMessage('password', null);
        yup.string()
            .required()
            .validate(form.password)
            .catch((e) => {
                form.password.error = e;
                form.password.isValid = false;
                form.password.message = 'password is invalid'
            }
            
        )
    };

    return (
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
                                type='email'
                                placeholder='Enter your email address...'
                                value={form.email.value}
                                onChange={(e) => setFieldValue('email', e.target.value)}
                                isInvalid={!!form.email.error}
                            />
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
                                isInvalid={!!form.password.error}
                            />
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
    )
};
  
export default Login;