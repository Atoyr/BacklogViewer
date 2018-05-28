import React from 'react'
import CreateReact from 'create-react-class'
import { createStore } from 'redux';
import { connect } from 'react-redux'
import Header from './Header'
import Setting from './Setting'

var App = CreateReact({
    render: function(){
    return(
        <div>
            <Header />
            <Setting 
                setting={this.props.setting}
                onSaveButtonClick={this.props.onSaveButtonClick}
                />
        </div>
    )}
});
App.propTypes= {
    setting: React.propTypes.string,
    onSaveButtonClick :  React.PropTypes.func
};


export default App;