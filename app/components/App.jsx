import React from 'react'
import PropTypes from 'prop-types'
import CreateReact from 'create-react-class'
import { createStore } from 'redux';
import { connect } from 'react-redux'
import Header from './Header'
import Setting from '../containers/Setting'
import Board from '../containers/Board'
import { BrowserRouter as Router, Route, Switch,  Link, withRouter } from 'react-router-dom';

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


const App = ({setting,requestLoadSettingAsync}) => (
    <Router>
      <div style={{padding: "60px"}}>
        <Wrapper 
            requestLoadSettingAsync={requestLoadSettingAsync}
            setting={setting} >
            <Switch>
                <Route exact path="/setting" 
                    component={Setting} />       
                <Route exact path="/board"
                    component={Board} />       
                <Route 
                    component={Board} />       
            </Switch>
        </Wrapper>
      </div>
    </Router>
);

export default App;