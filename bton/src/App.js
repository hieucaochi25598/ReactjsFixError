import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {layThongTinNguoiDung} from './redux/actions/QuanLyNguoiDung'
import logo from './logo.svg';
import './App.css';
import QuanLySinhVien from './QuanLySinhVienRedux/QuanLySinhVien';
import DanhSachCuoc from './GameBauCua/DanhSachCuoc';
import GameBauCua from './GameBauCua/GameBauCua';
import { DemoClass, DemoHooks } from './Hooks/DemoHooks';
import DanhSachKhoaHoc from './Elearning/DanhSachKhoaHoc';
import {Switch, Route} from 'react-router-dom';
import Header from './Layout/Header';
import PageNotFound from './Layout/PageNotFound';
import ChiTietKhoaHoc from './Elearning/ChiTietKhoaHoc';
import DangKy from './Elearning/DangKy';
import DangNhap from './Elearning/DangNhap';
import DemoLayoutHOC from './HOC/DemoLayoutHOC';
import ComponentUsingHOC from './HOC/DemoHOCProps';
import UserAuth from './Auth/UserAuth';
import UserLayout from './Layout/UserLayout';
import AdminLayout from './Layout/AdminLayout';
import QuanLyKhoaHoc from './Elearning/QuanLyKhoaHoc';
import AdminAuth from './Auth/AdminAuth';
import ThemKhoaHoc from './Elearning/ThemKhoaHoc';
import { setAuthorization } from './utils/axios';
import CustomHooksDanhSachKhoaHoc from './Elearning/CustomHooksDanhSachKhoaHoc';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Lấy thông tin người dùng từ localStore lên
    const userInfo = JSON.parse(localStorage.getItem("user"));
    // setAuthorization khi chạy app được chạy nếu có user trong localStorage
    // gọi action layThongTinNguoiDung để lưu vào store lại
    if(userInfo){
      setAuthorization(userInfo.accessToken);
      dispatch(layThongTinNguoiDung(userInfo));
    }
  }, []);
  return (
    <div>
      <Switch>
        <Route path='/login' component={DangNhap}/>
        <Route path='/register' component={DangKy}/>
        <AdminLayout path="/admin">
          <Switch>
          <AdminAuth path="/admin/courses-management" component={QuanLyKhoaHoc}/>
          <AdminAuth path="/admin/create-course" component={ThemKhoaHoc}/>
          </Switch>
        </AdminLayout>
        <UserLayout path="/">
          <Switch>
            <UserAuth path="/courses-list" component={CustomHooksDanhSachKhoaHoc} />
            <Route path="/course-detail/:maKhoaHoc" component={ChiTietKhoaHoc} />
            <Route path="/demo-hooks" component={DemoHooks} />
            <Route path="/game-bau-cua" component={GameBauCua} />
            <Route path='/demo-hoc' component={ComponentUsingHOC} />
          </Switch>
        </UserLayout>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
