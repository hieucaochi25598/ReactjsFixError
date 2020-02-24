import axios, { setAuthorization } from '../../utils/axios'
import { LAY_THONG_TIN_NGUOI_DUNG, LAY_THONG_TIN_DANG_NHAP } from '../constants/QuanLyNguoiDung';

export const dangKyAction = (values, handleSuccess) => {
    return dispatch => {
        axios.request({
            method: "POST",
            url: "QuanLyNguoiDung/DangKy",
            data: {...values, maNhom: "GP01"}
        })
        .then(result => {
            // Dispatch action gủi data vào store
            // dispatch(layThongTinNguoiDung(result.data));
            handleSuccess();
        })
        .catch(error => {
            console.log(error);
        });
    };
};

export const layThongTinNguoiDung = nguoiDung => {
    return {
        type: LAY_THONG_TIN_NGUOI_DUNG,
        data: nguoiDung
    }
}

export const dangNhapAction = (values, handleSuccess) => {
    return dispatch => {
        axios.request({
            method: "POST",
            url: "QuanLyNguoiDung/DangNhap",
            data: values
        })
        .then(result => {
            // Gọi phương thức setAuthorization để gắn token vào header
            setAuthorization(result.data.accessToken);
            // Lưu xuống localstore để giữ lại trạng thái đăng nhập khi refresh page
            localStorage.setItem("user", JSON.stringify(result.data));
            dispatch(layThongTinDangNhap(result.data));
            handleSuccess();
        })
        .catch(error => {
            console.log(error);
        });
    };
};

export const layThongTinDangNhap = taiKhoan => {
    return {
        type: LAY_THONG_TIN_DANG_NHAP,
        data: taiKhoan
    }
}