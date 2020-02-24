import React, { useState } from 'react';
import { Formik, useFormik, useField } from "formik";
import { Input, FormControl, InputLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { themKhoaHoc } from '../redux/actions/QuanLyKhoaHoc';

const MyInput = props => {
    const [field, meta] = useField(props); 
    // field bao gồm value, handleChange, handleBlur, . . . 
    //meta bao gồm touched, error để phát hiện lỗi
    // props có thể bao gồm name, type, placeholder, ...
    return <input {...field} {...props}/>;
}

// values = [{label: 'Táo', value: 'apple'}]
// label để hiển thị ra giao diện, còn value là cái mình sử dụng
const MySelect = ({values, ...props}) => {
    const [field, meta] = useField(props);
    return <select {...field}{...props}>
        {values.map(item => (
            <option key={item.value} value={item.value}>
                {item.label}
            </option>
        ))}
    </select>
}

const ThemKhoaHoc = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState("");
    const handleChangeFile = e => {
        setFile(e.target.files[0]);
    }
    return (
        <div className="container">
            <div className="row">
                <Formik
                    initialValues={{
                        maKhoaHoc: "",
                        biDanh: "",
                        tenKhoaHoc: "",
                        moTa: "",
                        hinhAnh: "",
                        maDanhMucKhoaHoc: "",
                        // taiKhoanNguoiTao: ''
                    }}
                    onSubmit={values => dispatch(themKhoaHoc({...values, hinhAnh: file}))}
                >
                    {({ handleSubmit, values, handleChange, handleBlur, setFieldValue }) => {
                        // const handleChangeFile = evt => {
                        //     //  setFieldValue có tác dụng set value cho 1 ô input bất kỳ
                        //     setFieldValue('hinhAnh',evt.target.files[0])
                        // };
                        return (
                            <form>
                                <label> Mã Khóa Học</label>
                                <MyInput type="text" name="maKhoaHoc" />
                                <label>Tên Khóa Học</label>
                                <MyInput type="text" name="tenKhoaHoc" />
                                <label>Bí Danh</label>
                                <MyInput type="text" name="biDanh" />
                                <label>Mô Tả</label>
                                <MyInput type="text" name="moTa" />
                                <label>Hình ảnh</label>
                                <MyInput type="file" name="hinhAnh" onChange={handleChangeFile} />
                                <label>Mã Danh Mục Khóa Học</label>
                                <MySelect name="maDanhMucKhoaHoc" values={[
                                    { label: "Chọn danh mục khóa học", value: ""},
                                    { label: "Lập trình BackEnd", value: "Backend" },
                                    { label: "Lập trình FrontEnd", value: "Frontend" }
                                    ]} />
                                <button onClick={handleSubmit}>Submit</button>
                            </form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
};

export default ThemKhoaHoc;
