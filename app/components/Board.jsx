import React from 'react';
import PropTypes from 'prop-types'
import Card from './Card'

const board = ({myself,issues,getMyselfAsync,getIssuesAsync}) => (
  <div>
      <p>{myself.id}</p>
      <p>{myself.mailAddress}</p>
      <p>{myself.name}</p>
      {issues.map(x =>
        <Card
        key={x.keyId}
        {...x}
        />
      )}
    <button onClick={(event) => getMyselfAsync(event)}> get myself </button>
    <button onClick={(event) => getIssuesAsync(event)}> get Issues </button>
  </div>
);
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
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      keyId: PropTypes.any,
    }))
  ,
  getMyselfAsync: PropTypes.func,
  getIssuesAsync: PropTypes.func,
}

export default board;