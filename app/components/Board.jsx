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
import {Card} from './Card'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},dispatch);
};

var board = CreateReact({
  componentDidMount : function() {
    // var issues = this.props.issues.issues
    // for(var i in issues){
    //   this.cards.push(<Card id={issues[i].id} title={issues[i].summary}/>);
    // }
    return;
  },
  click: function(event) {
    this.props.getMyselfAsync();
    // const hoge = this.props.board;

    return;
  },
  click2: function(event) {
    this.props.getIssuesAsync();
    // const hoge = this.props.board;

    return;
  },
  cards: [],

  render: function() {
    return (
        <div>
            <div>
              <p>{this.props.myself.id}</p>
              <p>{this.props.myself.mailAddress}</p>
              <p>{this.props.myself.name}</p>
              {this.cards}
            </div>
            <button onClick={(event) => this.click(event)}> get myself </button>
            <button onClick={(event) => this.click2(event)}> get Issues </button>
        </div>);
  },
  propTypes : {
    myself: PropTypes.shape
    ({
        id: PropTypes.any,
        lang: PropTypes.any,
        mailAddress: PropTypes.any,
        name: PropTypes.any,
        nulabAccount: PropTypes.any,
        roleType: PropTypes.any,
        userId: PropTypes.any,
    }),
    issues: PropTypes.any,
    getMyselfAsync: PropTypes.func,
    getIssuesAsync: PropTypes.func,
  }  
})

export default board;