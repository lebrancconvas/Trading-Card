import React , {Component} from 'react'
import SiamDream from '../assets/img/siamdream.jpg'
import Harupii from '../assets/img/harupii-siamdream2.jpg'
import Hikarin from '../assets/img/hikarin-siamdream.jpg'
import Nico from '../assets/img/nico-siamdream.jpg'
import Mary from '../assets/img/mary-siamdream.jpg'
import styled from 'styled-components'
import 'bulma/css/bulma.css'

const Head = styled.h1`
    font-size: 30px;
`

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardno: 0,
            member:"",
            img: Harupii
        }
        this.randomAccess = this.randomAccess.bind(this)
    }
    

    randomAccess() {
        let ind = Math.floor((Math.random() * 4))
        this.setState({
            cardno: ind,
            member: ["Harupii","Hikarin","Mary","Nico"],
            img: [Harupii,Hikarin,Mary,Nico]
        })
    }

    render() {
        return (
            <div>
                <Head>SiamDream Trading Card</Head>
                <img src={this.state.img[this.state.cardno]} alt="randomidol" width="30%" height="50%" />
                <div>
                    คุณสุ่มได้การ์ด {this.state.member[this.state.cardno]} SiamDream
                </div>
                <div className="button is-primary" onClick={this.randomAccess}>Random Card</div>
            </div>
        )
    }
}