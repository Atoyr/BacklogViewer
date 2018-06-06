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

var board = CreateReact({
  componentDidMount : function() {
    return;
  },
  click: function(event) {
    this.props.getMyselfAsync();
    const hoge = this.props.myself;

    return;
  },
  render: function() {
    return (
        <div>
            <div>{this.props.myself}</div>
            <button onClick={(event) => this.click(event)}> get myself </button>
        </div>);
  },
  propTypes : {
    myself: PropTypes.any,
    getMyselfAsync: PropTypes.func,
  }  
})

export default board;