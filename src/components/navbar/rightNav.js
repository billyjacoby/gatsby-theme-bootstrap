import React from "react"
import { Link } from "gatsby"
import { Nav, Form, FormControl, Button } from "react-bootstrap"

const LeftNav = ({ pageName, configPageInfo }) => (
  <Nav className="ml-auto" activeKey={pageName ? pageName : ""}>
    {configPageInfo ? (
      configPageInfo.map((item, index) => {
        return (
          <Link to={item.pagePath} className="link-no-style" key={index}>
            <Nav.Link as="span" eventKey={item.pageName}>
              {item.pageName}
            </Nav.Link>
          </Link>
        )
      })
    ) : (
      <Form inline onSubmit={e => e.preventDefault()}>
        <Form.Group>
          <FormControl type="text" placeholder="Fake Search" className="mr-2" />
        </Form.Group>
        <Button>Fake Button</Button>
      </Form>
    )}
  </Nav>
)

export default LeftNav
