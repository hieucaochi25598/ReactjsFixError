import React, { Component, useState, useEffect } from 'react';
import useCounter from './useCounter';
import useForm from './useForm';

// Validation của form nào thì form đó tự viết, không thể làm hàm chung được
// LoginForm có 2 field là username và password
export const validation = values => {
    let errors = {};
    if(!values.username){
        errors.username = 'Không được để trống';
    }
    if(!values.password){
        errors.password = 'Không được để trống';
    }
    // Validate min user name
    if (values.username.length < 5){
        errors.username = ' Độ dài ít nhất 5 kí tự';
    }
    // Validate max user name
    if (values.username.length > 15){
        errors.username = 'Độ dài tối đa 15 kí tự';
    }
    return errors;
}

export const DemoHooks = () => {
    const [count, setCount] = useState(0);
    const [name, setname] = useState({
        firstName: '',
        lastName: ''
    });


    // Sử dụng custom hooks useCounter
    const [number, inc, desc] = useCounter(0);

    // Sử dụng custom hooks useForm
    const [loginForm, handleChangeLoginForm, handleBlurLoginForm] = useForm({
        values: {
            username: '',
            password: ''
        },
        errors: {
            username: '',
            password: ''
        },
    },
        validation
    );

    // ANCHOR useEffect chạy sau khi state thay đổi và render lại
    // nó nhận vào 2 tham số, 1: hàm callback để xử lý,
    //  2: 1 array các tham số mà nó sẽ so sánh để quyết định xem có chạy useEffect sau khi render lại không
    // Hàm useEffect này chỉ được chạy khi count thay đổi
    useEffect(() => {
        console.log('count sau khi render', count);
    }, [count]);

    // Hàm useEffect này chỉ được chạy khi name thay đổi
    useEffect(() => {
        console.log('count sau khi render', count);
    }, [name]);

    // Array không tham số useEffect chỉ chạy 1 lần duy nhất => tương ứng vs componentDidMount
    useEffect(() => {
        console.log('render 1 lần duy nhất');
    }, []);

    // Không có tham số thứ 2, useEffect này sẽ chạy mỗi khi render lại
    useEffect(() => {
        console.log('render lại mỗi khi state hoặc props thay đổi');
    })

    // Không thể sử dụng useEffect hoac useState trong if else for while

    const handleChange = (evt) => {
        // const [name, value] = evt.target;
        setname({...name, [evt.target.name]: evt.target.value});
        // ...name gồm fn: 'a', ln: 'b', đổi ln: 'c' nếu ko có thì thành ~> name gồm ln: 'c'
        // có dùng name thì ~> fn: 'a', ln: 'c'
    }



    return (
        <div>
            {/* <h1>Demo Hooks</h1>
            <p>{count}</p>
            <button onClick = {() => setCount(count + 1)}> Cộng </button>
            {count % 2 === 0  && <HooksChild/>} */}
            {/* <input type = 'text' name = 'firstName' value = {name.firstName} onChange = {handleChange}/>
            <input type = 'text' name = 'lastName' value = {name.lastName} onChange = {handleChange}/> */}
            
            {/* useCounter */}
            <p>{number}</p>
            <button onClick={inc}>Tăng</button>
            <button onClick={desc}>Giảm</button>

            {/* useForm */}
            <br/>
            <input type = 'text' name = 'username' value = {loginForm.values.username} onChange = {handleChangeLoginForm} onBlur = {handleBlurLoginForm}/>
            {loginForm.errors.username && <p>{loginForm.errors.username}</p>}
            <input type = 'text' name = 'password' value = {loginForm.values.password} onChange = {handleChangeLoginForm} onBlur = {handleBlurLoginForm}/>
            {loginForm.errors.password && <p>{loginForm.errors.password}</p>}
        </div>
    )
}



export const HooksChild = () => {
    useEffect(() => {
        let timeOut = setTimeout(() => {
            console.log('Render sau 1s');
        }, 1000)
        console.log('HooksChild Render');
        return () => {
            console.log('HooksChild Unmount');
            clearTimeout(timeOut);
        }
    });
    return (
        <div>Hello</div>
    )
}

