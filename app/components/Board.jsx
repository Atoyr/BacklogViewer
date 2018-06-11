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

const board = ({myself,issues,getMyselfAsync,getIssuesAsync}) => (
  <div>
    <div>
      <p>{myself.id}</p>
      <p>{myself.mailAddress}</p>
      <p>{myself.name}</p>
    </div>
    <div>
      {issues.map(x =>
        <Card
        // key={x.keyId}
        // {...x}
        id={x.id}
        />
      )}
    </div>
        {/*  <Cards issues={this.props.issues} /> */}
    <button onClick={(event) => getMyselfAsync(event)}> get myself </button>
    <button onClick={(event) => getIssuesAsync(event)}> get Issues </button>
  </div>
);
  // board.componentDidMount = () => {
  //   // var issues = this.props.issues
  //   // for(var i in issues){
  //   //   this.cards.push(<Card id={issues[i].id} title={issues[i].summary}/>);
  //   // }
  //   return;
  // }
  board.propTypes = {
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
    issues: PropTypes.array
    // Of(PropTypes.shape({
    //   id: PropTypes.number
    //   }))
    ,
    getMyselfAsync: PropTypes.func,
    getIssuesAsync: PropTypes.func,
  }

export default board;