import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    // Styling Parameters
    const FormGroupClass = 'mb-3';

    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: null,
        password: null,
    })

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(form)
    }

    const setField = (field: any, value: any) => {
        setForm({
            ...form,
            [field]:value
        });

        if (errors[field as keyof typeof errors])
            setErrors({
                ...errors,
                [field]:null
            });
    }

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
                                value={form.email}
                                onChange={(e) => setField('email', e.target.value)}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/**
                         * Password Field
                        */}
                        <Form.Group className={FormGroupClass} controlId='formSignUpPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder='Enter your password...'
                                value={form.password}
                                onChange={(e) => setField('password', e.target.value)}
                                isInvalid={!!errors.password}
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