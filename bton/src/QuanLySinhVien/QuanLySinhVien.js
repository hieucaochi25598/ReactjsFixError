import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import DanhSachSinhVien from './DanhSachSinhVien';

export default class QuanLySinhVien extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isOpen : false,
             danhSachSinhVien: [],
             sinhVienSua: {}
        };
    };
    
    handleSubmit = sinhVien => {
        console.log(sinhVien);

        const danhSachSinhVien = [...this.state.danhSachSinhVien];

        const index = danhSachSinhVien.findIndex(sv => sv.maSV === sinhVien.maSV);

        if(index !== -1){
            //Cách 1
            danhSachSinhVien[index].hoTenSV = sinhVien.hoTenSV;
            danhSachSinhVien[index].tuoiSV = sinhVien.tuoiSV;
            danhSachSinhVien[index].email = sinhVien.email;

            //Cách 2
            // danhSachSinhVien[index] = {...sinhVien}
            
        }
        else {
            danhSachSinhVien.push(sinhVien);
        }
        this.setState(/*state =>({
            danhSachSinhVien: [...state.danhSachSinhVien, sinhVien]
        })*/ {danhSachSinhVien}, () => {
            localStorage.setItem(
                "dssv",
                JSON.stringify(this.state.danhSachSinhVien),
            )
        });
    };

    handleDelete = maSV => {
        const danhSachMoi = this.state.danhSachSinhVien.filter(sv => sv.maSV !== maSV);
        this.setState({
            danhSachSinhVien : danhSachMoi
        });
    };
    
    handleEdit = sinhVien => {
        this.handleToggle();
        this.setState({
            sinhVienSua : sinhVien
        });
    };

    componentDidMount(){    // chạy sau khi render xong
        const data = JSON.parse(localStorage.getItem("dssv"));
        if(data){
            this.setState({danhSachSinhVien:data});
        }
    }

    handleToggle = () => {
        this.setState(state => ({
            isOpen : !state.isOpen
        }));
    };


    render() {
        return (
            <div className = "container">
                <h2 className = "text-center">QUẢN LÝ SINH VIÊN</h2>
                <button className = "btn btn-success mb-5" 
                    onClick = {() => {
                        this.setState({sinhVienSua:{}, isOpen : true});
                    }}
                >Thêm Sinh Viên</button>
                <FormSinhVien
                    isOpen = {this.state.isOpen}
                    onToggle = {this.handleToggle}
                    onSubmit = {this.handleSubmit}
                    sinhVien = {this.state.sinhVienSua}
                />
                <DanhSachSinhVien 
                    mangSV = {this.state.danhSachSinhVien} 
                    onDelete = {this.handleDelete}
                    onEdit = {this.handleEdit}
                />
            </div>
        )
    }
}
