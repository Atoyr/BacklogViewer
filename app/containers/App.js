import React, { Component, PropTypes } from 'react'
import CreateReact from 'create-react-class'
import { connect } from 'react-redux'
import { saveSetting, saveSettingAsync, loadSetting } from '../actions'
import App from '../components/App'

function mapStateToProps(state){
    return {
        setting: state.setting,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadSetting: (value) => {dispatch(loadSetting(value))},
        saveSetting: (value) => {dispatch(saveSetting(value))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)