import { LAY_THONG_TIN_NGUOI_DUNG, LAY_THONG_TIN_DANG_NHAP } from "../constants/QuanLyNguoiDung";

const initialState = {
    userInfo: {}
};

const quanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_THONG_TIN_NGUOI_DUNG: {
            return {...state, userInfo: action.data};
        }
        case LAY_THONG_TIN_DANG_NHAP: {
            return {...state, userInfo: action.data};
        }
        default:
            return state;
    }
};
export default quanLyNguoiDungReducer;