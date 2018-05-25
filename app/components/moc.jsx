import React, {Component} from 'react'

var style = {
  container: {
    backgroundColor: "#ddd",
    width: 120
  }
}

class Moc extends Component{
  constructor(){
    super();
    this.state = {count :0};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
        <div>
            <div>count:{this.state.count}</div>
            <button style={style.container} onClick={this.handleClick}>click!</button>
        </div>
    );
  }
};

export default Moc;