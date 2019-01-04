import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,combineReducers} from 'redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

const memberState = {
    cardno: 0,
    member: ""
}

const wotaState = {
    queueno : 0,
    wota: ""
}

const memberreducer = (state = memberState,action) => {
    switch(action.type) {
        case "HARUPII":
            state = {
                cardno: 3,
                member: "Harupii"
            }

            break
        case "NICO":
            state = {
                cardno: 4,
                member: "Nico"
            }

            break
        default:
            state = {
                cardno: 0,
                member: "Unknown"
            }
            break

    }
    return state
}

const wotareducer = (state = wotaState,action) => {
    switch(action.type) {
        case "VIP":
            state = {
                queueno : 1,
                wota: "Wichian Kun"
            }
            break
        case "DOIKA":
            state = {
                queueno: 100,
                wota: "Krajok Kun"
            }
            break
        default:
            state = {
                queueno: 0,
                wota: "Unknown"
            }
            break
    }
    return state
}

// const store = createStore((state,action) => {
//     switch(action.type) {
//         case 1:
//             break
//         case 2:
//             break
//         default:
//     }
// })

const store = createStore(combineReducers({memberreducer,wotareducer}))

store.subscribe(() => {
    console.log("Update Store: ",store.getState())
}) 

store.dispatch({
    type: "NICO"
})

store.dispatch({
    type: "HARUPII"
})

store.dispatch({
    type: "VIP"
})

store.dispatch({
    type: "DOIKA"
})




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
