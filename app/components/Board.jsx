import React from 'react';
import PropTypes from 'prop-types'
import Card from './Card'
import Member from './Member';

const style = {
  display: 'flex',
  flexDirection: 'row',
  padding: '10px',
}
const styleBlue = {
  backgroundColor:'blue',
  padding: '10px'
}
const styleGreen = {
  backgroundColor:'green',
  padding: '10px'
}
const styleYellow = {
  backgroundColor:'yellow',
  padding: '10px'
}

const board = ({myself,issues,spaceInfo,userInfo,getMyselfAsync,getIssuesAsync,getSpaceInfoAsync,getUserInfoAsync,loadSetting}) => {
  loadSetting('');
  return(
  <div>
    <p>{myself.id}</p>
    <p>{myself.mailAddress}</p>
    <p>{myself.name}</p>
    {userInfo
      .filter(x=>x.id == myself.id)
      .map(x => <Member key={x.id} id={x.id} name={x.name} imgSrc={x.icon} />)
    
    }
    <div style={style}>
      <div style={styleYellow}>
        {issues
          .filter(x => x.statusId == '1')
          .map(x =>
          <Card
          key={x.keyId}
          {...x}
          />
        )}
      </div>
      <div style={styleBlue}>
        {issues
          .filter(x => x.statusId == '2')
          .map(x =>
          <Card
          key={x.keyId}
          {...x}
          />
        )}
      </div>
      <div style={styleGreen}>
        {issues
          .filter(x => x.statusId == '3')
          .map(x =>
          <Card
          key={x.keyId}
          {...x}
          />
        )}
      </div>
    </div>
    <p>{spaceInfo.name}</p>
    <button onClick={(event) => getMyselfAsync(event)}> get myself </button>
    <button onClick={(event) => getIssuesAsync(event)}> get Issues </button>
    <button onClick={(event) => getSpaceInfoAsync(event)}> get SpaceInfo </button>
    <button onClick={(event) => getUserInfoAsync(myself.id)}> get UserInfo </button>

  </div>
)};
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
  spaceInfo: PropTypes.shape({
    name: PropTypes.any
  }),
  userInfo: PropTypes.any,
  getMyselfAsync: PropTypes.func,
  getIssuesAsync: PropTypes.func,
  getSpaceInfoAsync: PropTypes.func,
  getUserInfoAsync: PropTypes.func,
}

export default board;