import React from 'react';
import {useDispatch} from 'react-redux'
import {Formik, Field, ErrorMessage} from 'formik';
import {Form, FormGroup, Label, Input, FormFeedback, Button} from 'reactstrap';
import { dangKyAction } from '../redux/actions/QuanLyNguoiDung';

const validate = values => {
    let errors = {};
    Object.keys(values).forEach(key => {
        if(!values[key]){
            errors[key] = 'Required';
        }
    });
    if(values.email.indexOf('@') === -1){
        errors.email = 'Email not valid';
    };
    // Tùy ý thêm validation vào
    return errors
}

const DangKy = (props) => {
    const dispatch = useDispatch();

    const handleRegisterSuccess = () => {
        // Hàm callback này sẽ chạy khi được gọi bên action
        props.history.push("/login");
    }
    return (
        <div>
            <h1>Form Đăng Ký</h1>
            <Formik initialValues={{
                taiKhoan:'',
                matKhau:'',
                hoTen: '',
                soDT:'',
                email:'',
            }}
            validate={validate}
            onSubmit={values => dispatch(dangKyAction(values, handleRegisterSuccess))}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                    <Form>
                        {/* <FormGroup>
                            <Label>Tài Khoản</Label>
                            <Input type='text' 
                            name='taiKhoan' 
                            
                            Cần 3 props này nếu không dùng Field của formik
                            value={values.taiKhoan} 
                            handleChange={handleChange} 
                            handleBlur={handleBlur}/>

                            Cần tự kiểm tra errors và touched nếu không xài ErrorMessage
                            {errors.taiKhoan && touched.taiKhoan && <FormFeedback>{errors.taiKhoan}</FormFeedback>}
                        </FormGroup> */}
                        <FormGroup>
                            <Label>Tài Khoản</Label>
                            <Input tag={Field} type='text' name='taiKhoan'/>
                            {/* Thông thường sử dụng Field như thế này, do Reactstrap sung đột thư viện nên phải dùng Input r tag={Field} NOTE  */}
                            {/* <Field type='text' name='taiKhoan' component={Input}/> */}
                            <ErrorMessage name='taiKhoan' />
                        </FormGroup>
                        <FormGroup>
                            <Label>Mật Khẩu</Label>
                            <Input tag={Field} type='password' name='matKhau'/>
                            {/* <Field type='password' name='matKhau' component={Input}/> */}
                            <ErrorMessage name='matKhau' />
                        </FormGroup>
                        <FormGroup>
                            <Label>Họ Tên</Label>
                            <Input tag={Field} type='text' name='hoTen'/>
                            {/* <Field type='text' name='hoTen' component={Input}/> */}
                            <ErrorMessage name='hoTen' />
                        </FormGroup>
                        <FormGroup>
                            <Label>Số Điện Thoại</Label>
                            <Input tag={Field} type='text' name='soDT'/>
                            {/* <Field type='text' name='soDT' component={Input}/> */}
                            <ErrorMessage name='soDT' />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input tag={Field} type='text' name='email'/>
                            {/* <Field type='email' name='email' component={Input}/> */}
                            <ErrorMessage name='email' />
                        </FormGroup>
                        <Button color='primary' onClick={handleSubmit}>Đăng Ký</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DangKy;