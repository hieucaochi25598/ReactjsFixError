import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import DanhSachSinhVien from './DanhSachSinhVien';
import { toggleModalAction, chonSinhVienAction } from '../redux/actions/QuanLySinhVien';
import { connect } from 'react-redux';

class QuanLySinhVien extends Component {
    
    render() {
        return (
            <div className = "container">
                <h2 className = "text-center">QUẢN LÝ SINH VIÊN</h2>
                <button className = "btn btn-success mb-5" 
                    onClick = {() => {
                        this.props.onToggle(true);
                        this.props.chonSinhVien({});
                    }}
                >Thêm Sinh Viên</button>
                <FormSinhVien
                />
                <DanhSachSinhVien 
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onToggle: (status) => dispatch(toggleModalAction(status)),
    chonSinhVien: sinhVien => dispatch(chonSinhVienAction(sinhVien))
});

export default connect(null, mapDispatchToProps)(QuanLySinhVien);