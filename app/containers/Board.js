import React, { Component, PropTypes } from 'react'
import CreateReact from 'create-react-class'
import { connect } from 'react-redux'
import { requestMyselfAsync } from '../actions/backlogAction'
import { requestIssuesAsync } from '../actions/backlogAction'
import { requestSpaceInfoAsync } from '../actions/backlogAction'
import { requestUserInfoAsync } from '../actions/backlogAction'
import Board from '../components/Board'


const mapStateToProps = (state) => ({
        myself: state.myself,
        issues: state.issues,
        spaceInfo: state.spaceInfo,
        userInfo: state.userInfo
})

function mapDispatchToProps(dispatch) {
    return {
        getMyselfAsync: (value) => {dispatch(requestMyselfAsync())},
        getIssuesAsync: (value) => {dispatch(requestIssuesAsync())},
        getSpaceInfoAsync: (value) => {dispatch(requestSpaceInfoAsync(value))},
        getUserInfoAsync: (value) => {dispatch(requestUserInfoAsync(value))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Board)