import React from 'react'
import CreateReact from 'create-react-class'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

const imageSize ={
  width:'30px',
  height:'30px'
}

class Header extends React.Component{
    render() {
        return (
          <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>                
                <Link to="/">
                  <div>
                    <Image src={this.props.spaceInfo.icon} rounded style={imageSize}/>
                    {this.props.spaceInfo.name}
                  </div>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/board">
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
      componentWillMount(){
        this.props.getSpaceInfoAsync();
    }
}

export default Header;