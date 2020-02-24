import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Field, ErrorMessage} from 'formik';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { dangNhapAction } from '../redux/actions/QuanLyNguoiDung';
import { Redirect } from 'react-router-dom';

const validate = values => {
    let errors = {};
    Object.keys(values).forEach(key => {
        if(!values[key]){
            errors[key] = 'Required';
        }
    });
    return errors;
}

const DangNhap = (props) => {
    // Tương tự mapDispatchToProps nhưng dùng hooks
    const dispatch = useDispatch();
    // Tương tự mapStateToProps nhưng dùng hooks
    const {userInfo} = useSelector(state => state.quanLyNguoiDung); 

    const handleLoginSuccess = () => {
        // Hàm callback này sẽ chạy khi được gọi bên action
        // Đẩy người dùng vào trang / sau khi đăng nhập thành công bên action
        props.history.replace("/");
    };

    useEffect(() => {
        if(Object.keys(userInfo).length !== 0){
            props.history.push("/");
        }
    }, [userInfo]);

    return (
        <div>
            <h1>Form Đăng Nhập</h1>
            <Formik initialValues={{
                taiKhoan:'',
                matKhau:'',
            }}
            validate = {validate}
            onSubmit = {values => dispatch(dangNhapAction(values, handleLoginSuccess))}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <Form>
                        <FormGroup>
                            <Label>Tài khoản</Label>
                            <Input tag={Field} type='text' name='taiKhoan' />
                            <ErrorMessage name='taiKhoan' />
                        </FormGroup>
                        <FormGroup>
                            <Label>Mật Khẩu</Label>
                            <Input tag={Field} type='text' name='matKhau' />
                            <ErrorMessage name='matKhau' />
                        </FormGroup>
                        <Button color='primary' onClick={handleSubmit}>Đăng Nhập</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DangNhap;