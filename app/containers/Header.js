import React, { Component, PropTypes } from 'react'
import CreateReact from 'create-react-class'
import { connect } from 'react-redux'
import { requestSpaceInfoAsync } from '../actions/backlogAction'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
        spaceInfo: state.spaceInfo
})

function mapDispatchToProps(dispatch) {
    return {
        getSpaceInfoAsync: (value) => {dispatch(requestSpaceInfoAsync(value))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);