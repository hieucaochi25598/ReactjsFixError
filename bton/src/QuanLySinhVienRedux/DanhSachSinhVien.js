import React, { Component } from 'react'
import {connect} from 'react-redux'
import { xoaSinhVienAction, chonSinhVienAction, toggleModalAction } from '../redux/actions/QuanLySinhVien';

class DanhSachSinhVien extends Component {
    render() {
        console.log(this.props.mangSV);
        return (
            <table className = "table">
                <thead>
                    <tr>
                        <th>Mã Sinh Viên</th>
                        <th>Họ Tên</th>
                        <th>Tuổi</th>
                        <th>Email</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.mangSV.map(sv => (
                        <tr key = {sv.maSV}>
                            <td>{sv.maSV}</td>
                            <td>{sv.hoTenSV}</td>
                            <td>{sv.tuoiSV}</td>
                            <td>{sv.email}</td>
                            <td>
                                <button className = "btn btn-info" data-toggle = "modal" data-target = "#exampleModal" onClick = {() => 
                                    {
                                        this.props.chonSinhVien(sv);
                                        this.props.onToggle(true);
                                    }}>Edit</button>
                                <button className = "btn btn-danger" onClick = {() => this.props.xoaSinhVien(sv.maSV)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    mangSV: state.quanLySinhVien.danhSachSinhVien
});

const mapDispatchToProps = dispatch => ({
    xoaSinhVien: maSV => dispatch(xoaSinhVienAction(maSV)),
    chonSinhVien: sinhVien => dispatch(chonSinhVienAction(sinhVien)),
    onToggle: status => dispatch(toggleModalAction(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachSinhVien)