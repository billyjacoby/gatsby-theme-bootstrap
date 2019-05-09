import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"

const LeftNav = ({ pageName, configPageInfo }) => (
  <Nav className="mr-auto" activeKey={pageName ? pageName : ""}>
    {configPageInfo &&
      configPageInfo.map((item, index) => {
        return (
          <Link to={item.pagePath} className="link-no-style" key={index}>
            <Nav.Link as="span" eventKey={item.pageName}>
              {item.pageName}
            </Nav.Link>
          </Link>
        )
      })}
  </Nav>
)

export default LeftNav
