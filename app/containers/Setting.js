import React from 'react';
import {connect} from 'react-redux';

import {loadSetting, saveSetting} from '../actions'
import Setting from '../components/Setting'

const mapStateToProps = (state) =>({
    setting: state.setting
})
function mapDispatchToProps(dispatch) {
    return {
        loadSetting: (value) => {dispatch(loadSetting(value))},
        saveSetting: (value) => {dispatch(saveSetting(value))}
    }
}
export default connect(
    mapStateToProps
    ,mapDispatchToProps
)(Setting)