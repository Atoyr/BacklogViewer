import React from 'react';
import {connect} from 'react-redux';

import {requestLoadSettingAsync, requestSaveSettingAsync} from '../actions/settingAction'
import Setting from '../components/Setting'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) =>({
    setting: state.setting
})
function mapDispatchToProps(dispatch) {
    return {
        loadSetting: (value) => {dispatch(requestLoadSettingAsync(value))},
        saveSetting: (value) => {dispatch(requestSaveSettingAsync(value))}
    }
}
export default withRouter(connect(
     mapStateToProps
    ,mapDispatchToProps
)(Setting))