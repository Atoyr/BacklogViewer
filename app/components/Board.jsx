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
            <div>{this.props.payload}</div>
            <button onClick={(event) => this.props.getMyselfAsync(event)}> get myself </button>
        </div>);
  },
  propTypes : {
    payload: PropTypes.any,
    getMyselfAsync: PropTypes.func,
  }  
})

export default Setting;