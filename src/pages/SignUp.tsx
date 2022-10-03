import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
    // Styling Parameters
    const FormGroupClass = 'mb-3';

    const [form, setForm] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_verify: ''
    });
    const [errors, setErrors] = useState({
        email: null,
        first_name: null,
        last_name: null,
        password: null,
        password_verify: null
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
                         * First Name
                         */}
                        <Form.Group className={FormGroupClass} controlId='formFirstName'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your first name...'
                                value={form.first_name}
                                onChange={(e) => setField('first_name', e.target.value)}
                                isInvalid={!!errors.first_name}
                            />
                        </Form.Group>

                        {/**
                         * Last Name
                         */}
                        <Form.Group className={FormGroupClass} controlId='formLastName'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your last name...'
                                value={form.last_name}
                                onChange={(e) => setField('last_name', e.target.value)}
                                isInvalid={!!errors.last_name}
                            />
                        </Form.Group>

                        {/**
                         * Phone Number
                         */}
                        <Form.Group className={FormGroupClass} controlId="formPhoneNumber">

                        </Form.Group>

                        {/**
                         * Address
                         */}
                        <Form.Group className={FormGroupClass} controlId="formAddress">

                        </Form.Group>

                        {/**
                         * City
                         */}
                        <Form.Group className={FormGroupClass} controlId="formCity">

                        </Form.Group>

                        {/**
                         * State
                         */}
                        <Form.Group className={FormGroupClass} controlId="formState">

                        </Form.Group>

                        {/**
                         * Zip Code
                         */}
                        <Form.Group className={FormGroupClass} controlId="formZipCode">
                            
                        </Form.Group>

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
                         * Password Verification Field
                        */}
                        <Form.Group className={FormGroupClass} controlId='formSignUpPasswordVerify'>
                            <Form.Label>Password Verification</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder='Enter your password again...'
                                value={form.password_verify}
                                onChange={(e) => setField('password_verify', e.target.value)}
                                isInvalid={!!errors.password_verify}
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

export default SignUp;