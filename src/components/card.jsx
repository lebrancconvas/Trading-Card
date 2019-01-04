import React , {Component} from 'react'
import 'bulma/css/bulma.css'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardno: 0
        }
        this.randomAccess = this.randomAccess.bind(this)
    }
    

    randomAccess() {
        let ind = Math.floor((Math.random() * 10) + 1)
        this.setState({
            cardno: ind
            
        })
    }

    render() {
        return (
            <div>
                <h1>Card Slot Empty</h1>
                <img src=""/>
                <div>
                    คุณสุ่มได้การ์ดหมายเลข {this.state.cardno}
                </div>
                <div className="button is-primary" onClick={this.randomAccess}>Random Card</div>
                <h2>Hello World</h2>
            </div>
        )
    }
}