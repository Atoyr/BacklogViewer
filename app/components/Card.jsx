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

var card = ({id}) =>(
  <div>
  <p>{this.props.id}</p>
  </div>
)
// card.propTypes = {
//     id: PropTypes.any
//   }

export default card;