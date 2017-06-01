import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  handleOnClick(){
    this.props.store.dispatch({type: 'GET_COUNT_OF_ITEMS'})
  }
  render() {
    return (
      <div className="App">
          <button onClick={this.handleOnClick.bind(this)}>Click</button>
          <p> {this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

connect(mapStateToProps) (App)

export default App;
