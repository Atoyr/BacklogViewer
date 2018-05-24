import * as React from 'react'
var createReactClass = require('create-react-class');

class Moc extends React.Component{
  getInitialState() {
    return {
      count: 0
    };
  }
  handleClick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
        <div>
            <div>count:{this.state.count}</div>
            <button onClick={this.onClick}>click!</button>
        </div>
    );
  }
};

export default Moc;