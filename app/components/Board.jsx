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
  componentDidMount : function() {
    return;
  },
  render: function() {
    return (
        <div>
            <p>board moc</p>
        </div>    );
  },
  propTypes : {
  }  
})

export default Setting;