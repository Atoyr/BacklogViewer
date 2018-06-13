import React from 'react';
import PropTypes from 'prop-types'
import CreateReact from 'create-react-class';
import {bindActionCreators } from 'redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {Button,ButtonGroup,} from 'react-bootstrap';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import {Form, FormGroup, FormControl, ControlLabel, HelpBlock, HelpBlockProps} from 'react-bootstrap';
import {Tab,NavItem,Nav} from 'react-bootstrap'
import {loadSetting, saveSetting} from '../actions'
import { start } from 'repl';

const card = ({id,summary,startDate,dueDate,assigneeUser,color}) =>(
  <div>
    <Panel id={id} color={color}>
      <Panel.Heading>
        <Panel.Title componentClass="h3">{summary}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <p>Start : {startDate}</p>
        <p>DueDate : {dueDate}</p>
        <p>Assign At : {assigneeUser} </p>
      </Panel.Body>
    </Panel>
  </div>
)
card.propTypes = {
    id: PropTypes.any.isRequired,
    color: PropTypes.string.isRequired
  }

export default card;