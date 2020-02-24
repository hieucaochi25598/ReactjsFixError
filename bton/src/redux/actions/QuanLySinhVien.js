import { THEM_SINH_VIEN, XOA_SINH_VIEN, SUA_SINH_VIEN, CHON_SINH_VIEN, TOGGLE_MODAL } from "../constants/QuanLySinhVien"

export const themSinhVienAction = (sinhVien) => {
    return {
        type: THEM_SINH_VIEN,
        data: sinhVien
    };
};

export const xoaSinhVienAction = maSV => {
    return {
        type: XOA_SINH_VIEN,
        data: maSV
    };
};

export const suaSinhVienAction = sinhVien => {
    return {
        type: SUA_SINH_VIEN,
        data: sinhVien
    };
};

export const chonSinhVienAction = sinhVien => {
    return {
        type: CHON_SINH_VIEN,
        data: sinhVien
    };
};

export const toggleModalAction = status => {
    return {
        type: TOGGLE_MODAL,
        data: status
    };
};