import React, {useEffect} from 'react'
import axios from '../utils/axios'
import {connect} from 'react-redux'
import { layDanhSachKhoaHoc, changePageAction } from '../redux/actions/QuanLyKhoaHoc';
import PaginationComponent from '../Layout/Pagination';
import RenderDanhSachKhoaHoc from '../renderProps/RenderDanhSachKhoaHoc';

const DanhSachKhoaHoc = ({danhSachKhoaHoc, layDanhSachKhoaHoc, onChangePage, currentPage, totalCount,...props}) => {
    // useEffect(() => {
    //     // Gọi action
    //     layDanhSachKhoaHoc(currentPage, 8);
    //     // gọi API
    //     // axios({
    //     //     method: "GET",
    //     //     url: 'QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
    //     // }).then(result => {
    //     //     // Thành công, gọi action đưa data vào redux store
    //     //     layDanhSachKhoaHoc(result.data);
    //     // }).catch(error => {
    //     //     console.log(error);
    //     // })
    // }, []);

    // // Chỉ chạy khi props currentPage thay đổi
    // useEffect(() => {
    //     layDanhSachKhoaHoc(currentPage, 8);
    // }, [currentPage]);
    // console.log(danhSachKhoaHoc);
    return (
        <div>
            <h1>Danh Sach Khoa Hoc</h1>
            <RenderDanhSachKhoaHoc 
            // props truyền từ bên RenderDanhSachKhoaHoc qua, gồm danhSachKhoaHoc, currentPage, totalCount
            render={propstest => (
                <div className="container">
                <div className="row">
                    {propstest.danhSachKhoaHoc && propstest.danhSachKhoaHoc.map(item => (
                        <div className="col-md-4 card" key = {item.maKhoaHoc}>
                            <img src = {item.hinhAnh} className = "card-img" />
                            <p>{item.tenKhoaHoc}</p>
                            <button className="btn btn-success" onClick={() => 
                                // NOTE push là đẩy trang web mới vào chỗ trang web cũ, replace là thay thế trang web cũ thành trang web mới
                                // Dùng replace khi ko muốn người dùng bakc về trang web cũ như signin
                                // () => props.history.push(`/course-detail/${item.maKhoaHoc}`)
                                propstest.history.push(`/course-detail/${item.maKhoaHoc}`)
                            }>Chi tiết</button>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <PaginationComponent 
                    currentPage={propstest.currentPage}   // Page hiện tại 
                    pageSize={8}    // constant cố định số phần tử trong một trang mà bạn muốn
                    totalCount={propstest.totalCount}     // tổng số phần tử BE trả về
                    onChangePage={onChangePage} // callback props để truyền page từ con lên cha
                    />  
                </div>
            </div>
            )} />
        </div>
    )
}


const mapStateToProps = state => ({
    danhSachKhoaHoc: state.quanLyKhoaHoc.danhSachKhoaHoc,
    currentPage: state.quanLyKhoaHoc.currentPage,
    totalCount: state.quanLyKhoaHoc.totalCount,
});

const mapDispatchToProps = dispatch => ({
    layDanhSachKhoaHoc: (currentPage, pageSize) => 
    dispatch(layDanhSachKhoaHoc(currentPage, pageSize)),
    onChangePage: page => dispatch(changePageAction(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc);