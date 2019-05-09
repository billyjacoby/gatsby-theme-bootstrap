import React from "react"
import { Link } from "gatsby"

import { Navbar } from "react-bootstrap"

import configPageInfo from "../../themeConfig/pageInfo.json"

import LeftNav from "./leftNav"
import RightNav from "./rightNav"

const CustomNavbar = ({ pageName }) => {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Gatsby React Bootstrap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <LeftNav configPageInfo={configPageInfo} pageName={pageName} />
          <RightNav pageName={pageName} />
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
