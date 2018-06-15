import React from 'react'
import PropTypes from 'prop-types'
import CreateReact from 'create-react-class'
import { createStore } from 'redux';
import { connect } from 'react-redux'
import Header from './Header'
import Setting from '../containers/Setting'
import Board from '../containers/Board'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { requestLoadSettingAsync} from '../actions/settingAction'

const style = {
    paddingTop: '50px'
}

const Wrapper = ({ children }) => (
    <div className="wrapper">
    <Header />
    <main style={style}>
      { children }
    </main>
  </div>
);

const App = () => {
    return (
        <Router >
            <Wrapper>
                <Switch>
                    <Route exact path="/"
                     render={props => 
                        <Board />
                    }
                         />
                    <Route exact path="/setting"
                     render={props => 
                        <Setting />
                            }/>
                </Switch>
            </Wrapper>
        </Router>
)};
export default App;