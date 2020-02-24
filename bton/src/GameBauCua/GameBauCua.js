import React, { Component } from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import {connect} from 'react-redux'
import XucXac from './XucXac'
import { choiGameAction } from '../redux/actions/GameBauCua'

class GameBauCua extends Component {
    render() {
        return (
            <div className = 'container'>
                <h1 className = 'text-center'>Game Bau Cua</h1>
                <div className="d-flex justify-content-between">
                    <button className = 'btn btn-success' onClick = {() => this.props.choiGame()}>Đổ Xúc Xắc</button>
                    <XucXac/>
                    <p >Tổng Tiền : {this.props.tongTien} $</p>
                </div>
                <DanhSachCuoc/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tongTien: state.gameBauCua.tongTien
});

const mapDispatchToProps = dispatch => ({
    choiGame: () => dispatch(choiGameAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua)