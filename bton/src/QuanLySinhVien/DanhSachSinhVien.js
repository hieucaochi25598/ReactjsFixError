import React, { Component } from 'react'

export default class DanhSachSinhVien extends Component {
    render() {
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
                                <button className = "btn btn-info" data-toggle = "modal" data-target = "#exampleModal" onClick = {() => this.props.onEdit(sv)}>Edit</button>
                                <button className = "btn btn-danger" onClick = {() => this.props.onDelete(sv.maSV)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
