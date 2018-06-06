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
    // const hoge = this.props.board;

    return;
  },
  render: function() {
    return (
        <div>
            <div>
             <p>{this.props.board.id}</p>
             <p>{this.props.board.mailAddress}</p>
             <p>{this.props.board.name}</p>
            </div>
            <button onClick={(event) => this.click(event)}> get myself </button>
        </div>);
  },
  propTypes : {
    board: PropTypes.shape
    ({
        id: PropTypes.any,
        lang: PropTypes.any,
        mailAddress: PropTypes.any,
        name: PropTypes.any,
        nulabAccount: PropTypes.any,
        roleType: PropTypes.any,
        userId: PropTypes.any,
    }),
    getMyselfAsync: PropTypes.func,
  }  
})

export default board;