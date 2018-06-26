import React from 'react'
import CreateReact from 'create-react-class'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { FormGroup, ControlLabel, FormControl } from "react-router-bootstrap";


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
                <NavDropdown pullRight 
                title={this.props.selectProject.name} 
                id={this.props.selectProject.id} 
                eventKey={this.props.selectProject.id} 
                onSelect=
                {x => {
                  this.props.getProjectInfoAsync()
                  this.props.selectedProject({key:x,projects:this.props.projects})
                  }
                }>
                  {this.props.projects.map(x => <MenuItem key={x.id} eventKey={x.projectKey}>{x.name}</MenuItem>)}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
      }
      componentWillMount(){
        console.log(this.props)
        this.props.getSpaceInfoAsync();
        this.props.getProjectInfoAsync();
    }
}

export default Header;