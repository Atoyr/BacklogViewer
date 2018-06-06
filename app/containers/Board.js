import React, { Component, PropTypes } from 'react'
import CreateReact from 'create-react-class'
import { connect } from 'react-redux'
import { requestMyselfAsync } from '../actions'
import Board from '../components/Board'


const mapStateToProps = (state) => ({
        board: state.board
})

function mapDispatchToProps(dispatch) {
    return {
        getMyselfAsync: (value) => {dispatch(requestMyselfAsync())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Board)