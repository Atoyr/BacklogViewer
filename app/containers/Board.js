import React, { Component, PropTypes } from 'react'
import CreateReact from 'create-react-class'
import { connect } from 'react-redux'
import { requestMyselfAsync } from '../actions'
import { requestIssuesAsync } from '../actions'
import Board from '../components/Board'


const mapStateToProps = (state) => ({
        myself: state.myself,
        issues: state.issues
})

function mapDispatchToProps(dispatch) {
    return {
        getMyselfAsync: (value) => {dispatch(requestMyselfAsync())},
        getIssuesAsync: (value) => {dispatch(requestIssuesAsync())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Board)