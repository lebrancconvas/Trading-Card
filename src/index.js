import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

const reducer = (state,action) => {
    switch(action.type) {
        case "ADD":
            state += action.payload
            break
        case "SUBTRACT":
            state -= action.payload
            break
        default:

    }
    return state
}

const store = createStore(reducer , 1000)

store.subscribe(() => {
    console.log("Update Store: ",store.getState())
}) 

store.dispatch({
    type: "ADD",
    payload: 800
})




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
