import React , {Component} from 'react'
import {connect} from 'react-redux'
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

class Card extends Component {
    render() {
        return (
            <div>
                <Head>SiamDream Trading Card</Head>
                <Head>Player : {this.props.wotaname}</Head>
                <div className="box">
                    คุณสุ่มได้การ์ด {this.props.memberName} SiamDream
                </div>
                <div className="button is-primary" onClick={() => this.props.randomMember()}>
                    Random Card
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
    let member = ["HARUPII", "HIKARIN", "MARY", "NICO", "FERN", "ICE", "MATILDA"]
    return {
        randomMember: () => {
            let rand = Math.floor((Math.random() * 7))
            dispatch({
                type: member[rand]
            })
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Card)