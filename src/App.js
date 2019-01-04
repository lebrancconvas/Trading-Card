import React, { Component } from 'react'
import Card from './components/card.jsx'
import {connect} from 'react-redux'
import 'bulma/css/bulma.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card wotaname={this.props.fc.wota} />
        <div className="button is-danger" onClick={() => this.props.wotaSplash()}>Change Player</div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    mem: state.mem,
    fc: state.fc
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    wotaSplash: () => {
      dispatch({
        type: "VIP"
      })
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App)
