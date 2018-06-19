import React from 'react';
import {Panel} from 'react-bootstrap';
import Member from './Member';

const card = ({id,summary,startDate,dueDate,assingneeId,assigneeName}) =>(
    <Panel draggable='true'>
      <Panel.Heading>
        <Panel.Title>{summary}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <p>開始日 : {(new Date(startDate)).toLocaleDateString("ja-JP")}</p>
        <p>期日 　: {(new Date(dueDate)).toLocaleDateString("ja-JP")}</p>
      </Panel.Body>
      <Panel.Footer>ｚ
        <Member id={id} name={assigneeName}/>
      </Panel.Footer>
    </Panel>
)
card.propTypes = {
  }

export default card;