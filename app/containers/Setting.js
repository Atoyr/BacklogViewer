import React from 'react';
import {connect} from 'react-dedux';

import {loadSetting, saveSetting} from '../actions'
import Setting from '../components/Setting'

const mapStateToProps = (state) =>({
    setting: state.setting
})
const mapDispatchToProps = (dispatch) =>({
    loadSetting: setting => dispatch( loadSetting(setting))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Setting)