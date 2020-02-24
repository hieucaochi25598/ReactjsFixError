import { LAY_DANH_SACH_KHOA_HOC, LAY_CHI_TIET_KHOA_HOC, CHANGE_PAGE } from "../constants/QuanLyKhoaHoc";

const initialState = {
    danhSachKhoaHoc: [],
    chiTietKhoaHoc: {},
    currentPage: 1,
    totalCount: 0
};

const quanLyKhoaHocReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_KHOA_HOC: {
            return {...state, danhSachKhoaHoc: action.data.items, totalCount: action.data.totalCount};
        }
        case LAY_CHI_TIET_KHOA_HOC: {
            return {...state, chiTietKhoaHoc: action.data};
        }
        case CHANGE_PAGE: {
            return {...state, currentPage: action.data};
        }
        default:
            return state;
    };
};

export default quanLyKhoaHocReducer;