import React, { Component, PropTypes } from 'react'
import CreateReact from 'create-react-class'
import { connect } from 'react-redux'
import { requestMyselfAsync } from '../actions/backlogAction'
import { requestIssuesAsync } from '../actions/backlogAction'
import { requestSpaceInfoAsync } from '../actions/backlogAction'
import { requestUserInfoAsync } from '../actions/backlogAction'
import Board from '../components/Board'
import { requestLoadSettingAsync} from '../actions/settingAction'
import {withRouter} from 'react-router-dom'

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
        getUserInfoAsync: (value) => {dispatch(requestUserInfoAsync(value))},
        loadSetting: (value) => {dispatch(requestLoadSettingAsync(value))}
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Board));