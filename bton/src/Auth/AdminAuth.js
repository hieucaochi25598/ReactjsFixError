import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const AdminAuth = ({component: Component, ...props}) => {
    return (
        <Route
    {...props} 
    render={routerProps => {
        // routerProps là history, location, match
        // Xử lý kiểm tra xem user đã đăng nhập hay chưa
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if(userInfo){
            if(userInfo.maLoaiNguoiDung === "GV"){
                return <Component {...routerProps}/>
            }
            return <Redirect to="/"/>;
        }
        return <Redirect to="/login"/>;
    }}
    />
    )
};

export default AdminAuth;
