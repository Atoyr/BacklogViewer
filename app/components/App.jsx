import React from 'react'
import PropTypes from 'prop-types'
import CreateReact from 'create-react-class'
import { createStore } from 'redux';
import { connect } from 'react-redux'
import Header from './Header'
import Setting from '../containers/Setting'
import Board from '../containers/Board'
import { BrowserRouter as Router, Route, Switch,  Link, withRouter } from 'react-router-dom';
import { requestLoadSettingAsync} from '../actions/settingAction'

const style = {
    paddingTop: '50px'
}

class Wrapper extends React.Component{
    render(){
        return (
        <div className="wrapper">
            <Header />
            <main style={style}>
               {this.props.children}
            </main>
        </div>)}
    componentWillMount(){
        this.props.requestLoadSettingAsync();
    }
}


const App = ({setting,requestLoadSettingAsync}) =>{
    return (
    <Router>
      <div style={{padding: "60px"}}>
        <Wrapper 
        requestLoadSettingAsync={requestLoadSettingAsync}
        setting={setting}>
            <Switch>
                <Route exact path="/Setting"
                    component={settingProps => 
                    <Setting />
                        }/>
                <Route exact path="/Board"
                    component={boardProps => 
                    <Board />
                    }/>
                <Route exact path="/"
                    component={boardProps => 
                    <Board />
                    }/>
            </Switch>
        </Wrapper>
      </div>
    </Router>
)};

export default App;