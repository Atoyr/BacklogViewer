import React from 'react';
import PropTypes from 'prop-types'
import CreateReact from 'create-react-class';
import {bindActionCreators } from 'redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {Button,ButtonGroup,} from 'react-bootstrap';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Form, FormGroup, FormControl, ControlLabel, HelpBlock, HelpBlockProps} from 'react-bootstrap';
import {Tab,NavItem,Nav} from 'react-bootstrap'
import {loadSetting, saveSetting} from '../actions'


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},dispatch);
};

var Setting = CreateReact({
  load: function(e) {
    e.preventDefault();
    this.props.loadSetting();
    return;
  },
  save: function(e) {
    e.preventDefault();
    this.props.saveSetting({url: 'vvv',apiKey:'kkk'});
    return;
  },
  render: function() {
    return (
          <Tab.Container id="left-tabs-example" defaultActiveKey="global-setting"
          onLoad={(event) => this.load(event)}>
            <Row>
                <Col md={3} xs={3}>
                  <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="global-setting">Global Setting</NavItem>
                    <NavItem eventKey="user-information">UserInformation</NavItem>
                  </Nav>
                </Col> 
                <Col md={8} xs={8}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="global-setting">
                      <Form>
                          <FormGroup controlId='formControlsText'>
                              <ControlLabel>Backlog URL</ControlLabel>
                              <FormControl 
                              value={this.props.setting.url}
                              placeholder="Enter Backlog URL"
                              />
                          </FormGroup>
                          <FormGroup controlId='formControlsText'>
                              <ControlLabel>API Key</ControlLabel>
                              <FormControl 
                              placeholder="Enter API Key"
                              value={this.props.setting.apiKey}
                              />
                          </FormGroup>
                          <Button onClick={(event) => this.save(event)}>Save</Button>
                          <Button onClick={(event) => this.load(event)}>Save</Button>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="user-information">
                      <p>hogehoge</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
  },
  propTypes : {
    setting: PropTypes.shape({
      url: PropTypes.string,
      apiKey: PropTypes.string,      
    }),
    saveSetting: PropTypes.func,
    loadSetting: PropTypes.func,
  }  
})


export default Setting;