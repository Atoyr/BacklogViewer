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

var card = CreateReact({
  componentDidMount : function() {
    return;
  },
  render: function() {
    return (
        <div>
            <p>{this.props.card.id}</p>
            <p>{this.props.card.title}</p>
            <p>{this.props.card.assainToImage}</p>
            <p>{this.props.card.assainTo}</p>
            <p>{this.props.card.dueDate}</p>
        </div>);
  },
  propTypes : {
    card: PropTypes.shape
    ({
        id : PropTypes.any,
        title: PropTypes.any,
        assainTo: PropTypes.any,
        assainToImage: PropTypes.any,
        dueDate: PropTypes.any,
    }),
  }  
})

export default card;