import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { layDanhSachKhoaHoc } from '../redux/actions/QuanLyKhoaHoc';

const RenderDanhSachKhoaHoc = propstest => {
    const dispatch = useDispatch();
    console.log(propstest);
    const {danhSachKhoaHoc, currentPage, totalCount} = useSelector(state => state.quanLyKhoaHoc);
    useEffect(() => {
        dispatch(layDanhSachKhoaHoc(currentPage, 8));
    }, [currentPage]);
    return <div>
        {propstest.render({danhSachKhoaHoc, currentPage, totalCount})}
    </div>
};

export default RenderDanhSachKhoaHoc;