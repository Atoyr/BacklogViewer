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

const card = ({id,summary,startDate,dueDate,assigneeName}) =>(
  <div>
    <Panel>
      <Panel.Heading>
        <Panel.Title>{summary}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <p>Start : {(new Date(startDate)).toLocaleDateString("ja-JP")}</p>
        <p>DueDate : {(new Date(dueDate)).toLocaleDateString("ja-JP")}</p>
        <p>Assign At : {assigneeName} </p>
      </Panel.Body>
    </Panel>
  </div>
)
card.propTypes = {
  }

export default card;