import { connect } from 'react-redux'
import App from '../components/App'
import { requestLoadSettingAsync} from '../actions/settingAction'

const mapStateToProps = (state) => ({
    setting: state.setting
})

function mapDispatchToProps(dispatch) {
    return {
        requestLoadSettingAsync: (value) => {dispatch(requestLoadSettingAsync(value))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)