import React, { Component } from 'react'
import {connect} from 'react-redux'
import { tangCuocAction, giamCuocAction } from '../redux/actions/GameBauCua'

class DanhSachCuoc extends Component {
    render() {
        return (
            <div className = 'container'>
                <div className="row">
                    {this.props.danhSachCuoc.map(item =>(
                        <div className="card col-md-4" key = {item.ma}>
                            <img src={item.hinhAnh} className="card-img-top"/>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <button className = 'btn btn-danger' onClick = {() => this.props.giamCuoc(item.ma)}>-</button>
                                <p className="card-text text-center mx-5 mb-0">{item.diemCuoc}</p>
                                <button className = 'btn btn-info' onClick = {() => this.props.tangCuoc(item.ma)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    danhSachCuoc: state.gameBauCua.danhSachCuoc
})

const mapDispatchToProps = dispatch => ({
    tangCuoc: ma => dispatch(tangCuocAction(ma)),
    giamCuoc: ma => dispatch(giamCuocAction(ma)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc)