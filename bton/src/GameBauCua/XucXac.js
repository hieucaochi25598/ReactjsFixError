import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    render() {
        return (
            <div >
                {this.props.xucXac.map(item =>(
                        <img src={item.hinhAnh} width = "30px" height = "30px"/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    xucXac: state.gameBauCua.xucXac
})

export default connect(mapStateToProps)(XucXac)