import React from 'react'
import PropTypes from 'prop-types'
import CreateReact from 'create-react-class'
import { createStore } from 'redux';
import { connect } from 'react-redux'
import Header from './Header'
import Setting from './Setting'
import Board from './Board'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

const Wrapper = ({ children }) => (
    <div className="wrapper">
    <Header />
    <main>
      { children }
    </main>
  </div>
);

var App = CreateReact({
    render: function(){
    return(
        <Router >
            <Wrapper>
                <Switch>
                    <Route exact path="/"
                     render={props => 
                        <Board 
                        myself={this.props.myself}
                        getMyselfAsync={this.props.getMyselfAsync}/>}
                         />
                    <Route exact path="/setting"
                     render={props => 
                        <Setting 
                            setting={this.props.setting}
                            loadSetting={this.props.loadSetting}
                            saveSetting={this.props.saveSetting} />}/>
                </Switch>
            </Wrapper>
        </Router>
    )}
});
App.propTypes= {
    setting: PropTypes.any,
    myself: PropTypes.any,
    loadSetting: PropTypes.func,
    saveSetting: PropTypes.func,
    getMyselfAsync: PropTypes.func
};
// setting={this.props.setting}
// loadSetting={this.props.loadSetting}
// saveSetting={this.props.saveSetting}


export default App;