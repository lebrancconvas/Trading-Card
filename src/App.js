import React, { Component } from 'react'
import Card from './components/card.jsx'
import {connect} from 'react-redux'
import 'bulma/css/bulma.css'
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Card wotaname={this.props.fc.wota} memberImg={this.props.mem.image} memberName={this.props.mem.member} />
          <div className="button is-danger" onClick={() => this.props.wotaSplash()}>
            Random Player
          </div>
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
  let display = ["VIP","DOIKA","MAISAMA"]
  return {
    wotaSplash: () => {
      let ind = Math.floor((Math.random() * 3))
      dispatch({
        type: display[ind]
      })
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App)
