import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={7}>
                    <Form>
                        {/**
                         * Email Address Field
                         */}
                        <Form.Group className='mb-3' controlId='formLoginEmail'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter your email address...' />
                        </Form.Group>

                        {/**
                         * Password Field
                        */}
                        <Form.Group className='mb-3' controlId='formLoginPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder='Enter your password...' />
                        </Form.Group>

                        {/**
                         * Buttons
                         */}
                        <Button variant='primary' type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};
  
export default Login;