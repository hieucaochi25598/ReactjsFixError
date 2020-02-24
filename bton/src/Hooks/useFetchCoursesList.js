import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changePageAction, layDanhSachKhoaHoc } from '../redux/actions/QuanLyKhoaHoc';

const useFetchCoursesList = () => {
    const dispatch = useDispatch();
    const {danhSachKhoaHoc, currentPage, totalCount} = useSelector(
        state => state.quanLyKhoaHoc
    );

    const onChangePage = page => {
        dispatch(changePageAction(page));
    };

    useEffect(() => {
        dispatch(layDanhSachKhoaHoc(currentPage, 8));
    }, []);

    return {danhSachKhoaHoc, currentPage, totalCount, onChangePage};
};

export default useFetchCoursesList;