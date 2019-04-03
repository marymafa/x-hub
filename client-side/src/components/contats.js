import React, {} from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"
const Contacts =()=>{
return (
    <div>
        <div >
         {/* <div> */}
         <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>

         <input className="search"placeholder="search" />
         {/* </div>    */}
        <ul>
            <li>fdasf</li>
            <li>fasfd</li>
            <li>fasdf</li>
            <li>fasdfa</li>
            <li>fasdf</li>
            <li>fasdfas</li>
        </ul>
        </div>

    </div>
)

}
export default Contacts