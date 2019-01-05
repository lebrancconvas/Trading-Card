import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'


const memberState = {
    cardno: 0,
    member: "",
    image: null
}

const wotaState = {
    queueno : 0,
    wota: ""
}

const memberreducer = (state = memberState,action) => {
    switch(action.type) {
        case "HARUPII":
            state = {
                cardno: 1,
                member: "Harupii",
                // image: Harupii
            }
            break
        case "HIKARIN":
            state = {
                cardno: 2,
                member: "Hikarin"
                // image: Hikarin
            }
            break
        case "MARY":
            state = {
                cardno: 3,
                member: "Mary"
                // image: Mary
            }
            break
        case "NICO":
            state = {
                cardno: 4,
                member: "Nico"
                // image: Nico
            }
            break
        case "FERN":
            state = {
                cardno: 5,
                member: "Fern"
                // image: Fern
            }
            break
        case "ICE":
            state = {
                cardno: 6,
                member: "Ice"
                // image: Ice
            }
            break
        case "MATILDA":
            state = {
                cardno: 7,
                member: "Matilda"
                // image: Matilda
            }
            break
        default:
            
        }
    return state
}

const wotareducer = (state = wotaState,action) => {
    switch(action.type) {
        case "VIP":
            state = {
                queueno : 1,
                wota: "Soma"
            }
            break
        case "DOIKA":
            state = {
                queueno: 100,
                wota: "Poji"
            }
            break
        case "MAISAMA":
            state = {
                queueno: 20,
                wota: "Mai Sama"
            }
            break
        default:
            
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

const myLog = (store) => (next) => (action) => {
    console.log("Action Update: ",action)
    next(action)
}
const store = createStore(combineReducers({mem:memberreducer,fc:wotareducer}),{}.name,applyMiddleware(myLog))

store.subscribe(() => {
    console.log("Update Store: ",store.getState())
}) 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
