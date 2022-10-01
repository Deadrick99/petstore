import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormGroup } from 'react-bootstrap';
import './Adopt.css'
import "bootstrap/dist/css/bootstrap.min.css"
const Adopt =()=>{
    return(

      <div className='color-overlay d-flex justify-content-center align-items-center' style={{height:"100vh", backgroundColor:"	#232b2b"}} >
        <Form className='rounded p-4 p-sm-3'>
            <Row>
                <Col>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder='Enter First Name'></Form.Control>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder='Enter Last Name'></Form.Control>
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Label>Home size</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>What type of home do you have?</option>
      <option value="1">Apartment</option>
      <option value="2">Condo/Townhouse</option>
      <option value="3">House</option>
    </Form.Select>
    </Col>
      </Row>
       <Row>
        <Col>
        <Form.Label>Hours(Day) to spend with your pet.</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>Please select hours.</option>
      <option value="1">0-1</option>
      <option value="2">1-2</option>
      <option value="3">3+</option>
    </Form.Select>
    </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please tell us why you would like to adopt X.</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
        </Col>
    </Row>
       <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      </div>


    )
 
}
export default Adopt