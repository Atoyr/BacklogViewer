import React from 'react'
import CreateReact from 'create-react-class'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

var Header = CreateReact({
    render: function() {
        return (
          <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Backlog Viewer</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/">
                  <NavItem eventKey={1}>
                    Board
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/setting">
                  <NavItem eventKey={2}>
                    Setting
                  </NavItem>
                </LinkContainer>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
      }
})

export default Header;