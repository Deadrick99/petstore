import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { z } from 'zod';

import 'bootstrap/dist/css/bootstrap.min.css';

const FormGroupClass = 'mb-3';
const Params = ['address', 'city', 'email', 'first_name', 'last_name',
    'password', 'password_verify', 'phone_number', 'state', 'zip_code'
]
const Schemas = {
    address: z.string({
        required_error: 'Address is required',
        invalid_type_error: 'Address should be a string'
    }).trim().min(1, {
        message: 'Address should be non-empty'
    }),
    city: z.string({
        required_error: 'City is required',
        invalid_type_error: 'City should be a string'
    }).trim().min(1, {
        message: 'City should be non-empty'
    }),
    email: z.string({
        required_error: 'Email should be non-empty',
        invalid_type_error: 'Email must be a string'
    }).trim().email({
        message: 'Email should be a valid address'
    }),
    first_name: z.string({
        required_error: 'First Name is required',
        invalid_type_error: 'First Name should be a string'
    }).trim().min(1, {
        message: 'First Name should be non-empty'
    }),
    last_name: z.string({
        required_error: 'Last Name is required',
        invalid_type_error: 'Last Name should be a string'
    }).trim().min(1, {
        message: 'Last Name should be non-empty'
    }),
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    }).trim().min(5, {
        message: 'Password should be non-empty'
    }),
    password_verify: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    }).trim().min(5, {
        message: 'Password Verify should be non-empty'
    }),
    phone_number: z.string({
        required_error: 'Phone number is required',
        invalid_type_error: 'Phone number should be a string'
    }).trim().min(1, {
        message: 'Phone number should be non-empty'
    }),
    state: z.string({
        required_error: 'State is required',
        invalid_type_error: 'State should be a string'
    }).trim().min(1, {
        message: 'State should be non-empty'
    }),
    zip_code: z.string({
        required_error: 'Zip Code is required',
        invalid_type_error: 'Zip Code should be a string'
    }).trim().min(1, {
        message: 'Zip Code should be non-empty'
    }),
};

const SignUp = () => {

    const initState = { error: null, isValid: true, message: '', value: ''};
    const [form, setForm] = useState({
        address:         { error: null, isValid: true, message: '', value: ''},
        city:            { error: null, isValid: true, message: '', value: ''},
        email:           { error: null, isValid: true, message: '', value: ''},
        first_name:      { error: null, isValid: true, message: '', value: ''},
        last_name:       { error: null, isValid: true, message: '', value: ''},
        password:        { error: null, isValid: true, message: '', value: ''},
        password_verify: { error: null, isValid: true, message: '', value: ''},
        phone_number:    { error: null, isValid: true, message: '', value: ''},
        state:           { error: null, isValid: true, message: '', value: ''},
        zip_code:        { error: null, isValid: true, message: '', value: ''}
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
                console.log(error.issues[0].message)
                updateField(field, error, false, String(error.issues[0].message));
            }
        })

        event.preventDefault();
    };

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
                                value={form.first_name.value}
                                onChange={(e) => setFieldValue('first_name', e.target.value)}
                                isInvalid={!form.first_name.isValid}
                            />
                            {!form.first_name.isValid &&
                                <Form.Text className='text-danger'>
                                    {form.first_name.message}
                                </Form.Text>
                            }
                        </Form.Group>

                        {/**
                         * Last Name
                         */}
                        <Form.Group className={FormGroupClass} controlId='formLastName'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your last name...'
                                value={form.last_name.value}
                                onChange={(e) => setFieldValue('last_name', e.target.value)}
                                isInvalid={!form.last_name.isValid}
                            />
                            {!form.last_name.isValid &&
                                <Form.Text className='text-danger'>
                                    {form.last_name.message}
                                </Form.Text>
                            }
                        </Form.Group>

                        {/**
                         * Phone Number
                         */}
                        <Form.Group className={FormGroupClass} controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type='tel'
                                placeholder='123-456-7890'
                                value={form.phone_number.value}
                                onChange={(e) => setFieldValue('phone_number', e.target.value)}
                                isInvalid={!form.phone_number.isValid}
                             />
                            {!form.phone_number.isValid &&
                                <Form.Text className='text-danger'>
                                    {form.phone_number.message}
                                </Form.Text>
                            }
                        </Form.Group>

                        {/**
                         * Address
                         */}
                        <Form.Group className={FormGroupClass} controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your physical address...'
                                value={form.address.value}
                                onChange={(e) => setFieldValue('address', e.target.value)}
                                isInvalid={!form.address.isValid}
                            />
                            {!form.address.isValid &&
                                <Form.Text className='text-danger'>
                                    {form.address.message}
                                </Form.Text>
                            }
                        </Form.Group>

                        {/**
                         * City
                         */}
                        <Form.Group className={FormGroupClass} controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your city...'
                                value={form.city.value}
                                onChange={(e) => setFieldValue('city', e.target.value)}
                                isInvalid={!form.address.isValid}
                            />
                            {!form.city.isValid &&
                                <Form.Text className='text-danger'>
                                    {form.city.message}
                                </Form.Text>
                            }
                        </Form.Group>

                        {/**
                         * State
                         */}
                        <Form.Group className={FormGroupClass} controlId="formState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your state...'
                                value={form.state.value}
                                onChange={(e) => setFieldValue('state', e.target.value)}
                                isInvalid={!form.state.isValid}
                            />
                            {!form.state.isValid &&
                                <Form.Text className='text-danger'>
                                    {form.state.message}
                                </Form.Text>
                            }
                        </Form.Group>

                        {/**
                         * Zip Code
                         */}
                        <Form.Group className={FormGroupClass} controlId="formZipCode">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter your zip code...'
                                value={form.zip_code.value}
                                onChange={(e) => setFieldValue('zip_code', e.target.value)}
                                isInvalid={!form.zip_code.isValid}
                            />
                            {!form.zip_code.isValid &&
                                <Form.Text className='text-danger'>
                                    {form.zip_code.message}
                                </Form.Text>
                            }
                        </Form.Group>

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