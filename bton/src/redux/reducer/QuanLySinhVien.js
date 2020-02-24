import { THEM_SINH_VIEN, XOA_SINH_VIEN, CHON_SINH_VIEN, TOGGLE_MODAL, SUA_SINH_VIEN } from "../constants/QuanLySinhVien";

const initialState = {
    danhSachSinhVien: [
        {
            maSV:1,
            hoTenSV: 'Nam',
            tuoiSV: 23,
            email: 'nam@gmail.com',
        }
    ],
    sinhVienDangChon: {},
    isOpen: false
};

const quanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEM_SINH_VIEN:
            {
                // Xừ lý state thay đổi
            // state.danhSachSinhVien.push(action.data);
            // return state;

            /*  ANCHOR 
            Khi thêm như trên thì trả về kết quả là trong cùng địa chỉ vùng nhớ, dẫn đến redux không thực hiện render lại
            danhSachSinhVien trong js cũng được tính là obj nên cũng cần phải tạo ra 1 cái mới
            Để redux phát hiện thay đổi thì đổi return và danhSachSinhVien
            */

            const danhSachSinhVien = [...state.danhSachSinhVien];    // Gọi là immutable
            danhSachSinhVien.push(action.data);
            return {...state, danhSachSinhVien};

            // return {
            //     ...state,
            //     danhSachSinhVien: [...state.danhSachSinhVien, action.data]
            // };

            // break;
        
            }
        case XOA_SINH_VIEN:
            {
               const XoaSinhVien = state.danhSachSinhVien.filter(
                   sv => sv.maSV !== action.data
               );
            return {...state, danhSachSinhVien: XoaSinhVien};

            }
        case CHON_SINH_VIEN:
            {
                return {...state, sinhVienDangChon: action.data};
            }
        case TOGGLE_MODAL:
            {
                return {...state, isOpen: action.data};
            }
        case SUA_SINH_VIEN:
            {
                const index = state.danhSachSinhVien.findIndex(sv => sv.maSV === action.data.maSV);
                const danhSachSinhVien = [...state.danhSachSinhVien];
                danhSachSinhVien[index] = action.data;
                return {...state, danhSachSinhVien};
            }
        default:
            return state;
            // break;
    }
};

export default quanLySinhVienReducer;