import React, { Component } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

export default class FormSinhVien extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            maSV : "",
            hoTenSV : "",
            tuoiSV : "",
            email : "",
        }
    }

    handleChange = evt => {
        const {name, value} = evt.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = () => {
        const sinhVien = {...this.state};
        this.props.onSubmit(sinhVien);
    };
    
    componentDidUpdate(prevProps){
        if(prevProps.sinhVien !== this.props.sinhVien){
            const {maSV, hoTenSV, tuoiSV, email} = this.props.sinhVien;
            this.setState({
                maSV : maSV || '',
                hoTenSV : hoTenSV || '',
                tuoiSV: tuoiSV || '',
                email : email || '',
            });

            // this.setState(state => this.props.sinhVien);
            /*
            this.setState({
                maSV : this.props.maSV,
                hoTenSV : this.props.hoTenSV,
                tuoiSV : this.props.tuoiSV,
                email : this.props.email
            });
            */
        }
    }

    render() {
        return (
            <Modal isOpen = {this.props.isOpen} toggle = {this.props.onToggle}>
                <ModalHeader>Form Sinh Vien</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Mã Sinh Viên</label>
                            <input type="text" className="form-control" name="maSV" value={this.state.maSV} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Họ Tên Sinh Viên</label>
                            <input type="text" className="form-control" name="hoTenSV" value={this.state.hoTenSV} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Tuổi Sinh Viên</label>
                            <input type="text" className="form-control" name="tuoiSV" value={this.state.tuoiSV} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email Sinh Viên</label>
                            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button className = "btn btn-success" onClick = {this.handleSubmit}>Lưu</button>
                    <button className = "btn btn-danger" onClick = {this.props.onToggle}>Hủy</button>
                </ModalFooter>
            </Modal> 
        );
    }
}
