import { LAY_DANH_SACH_KHOA_HOC, LAY_CHI_TIET_KHOA_HOC, CHANGE_PAGE} from '../constants/QuanLyKhoaHoc';
import axios from '../../utils/axios'

export const themKhoaHoc = khoaHoc => {
    return (dispatch, getState) => {
        // Lấy dữ liệu từ redux store thông qua getState
        const {userInfo} = getState().quanLyNguoiDung;
        const date = new Date();
        console.log(khoaHoc.hinhAnh);
        const dataSubmit = {
            ...khoaHoc,
            hinhAnh: khoaHoc.hinhAnh.name,
            luotXem: 10,
            danhGia: 0,
            taiKhoanNguoiTao: userInfo.taiKhoan,
            ngayTao: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,   // dd / mm / yy
            maNhom: "GP01",
        }
        axios.request({
            method: "POST",
            url: "QuanLyKhoaHoc/ThemKhoaHoc",
            data: dataSubmit
        }).then(result => {
            const formData = new FormData();
            formData.append("file", khoaHoc.hinhAnh);
            formData.append("tenKhoaHoc", khoaHoc.tenKhoaHoc)
            axios.request({
                method: "POST",
                url: 'QuanLyKhoaHoc/UpLoadHinhAnhKhoaHoc',
                data: formData
            })
        })
    }
}


export const layDanhSachKhoaHocAction = danhSachKhoaHoc => {
    return {
        type: LAY_DANH_SACH_KHOA_HOC,
        data: danhSachKhoaHoc
    };
};

export const layDanhSachKhoaHoc = (currentPage, pageSize) => {
    return dispatch => {
        // Gọi API
        axios
        .request({
            method: "GET",
            url: `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${pageSize}&MaNhom=GP01`
        })
        .then(result => {
            // Thành công, gọi action đưa data vào redux store
            dispatch(layDanhSachKhoaHocAction(result.data));
        })
        .catch(error => {
            console.log(error);
        });
    };
};

export const layChiTietKhoaHoc = (maKhoaHoc) => {
    return dispatch => {
        axios.request({
            method: "GET",
            url: `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
        })
        .then(result => {
            // Gọi action đẩy dữ liệu vào store
            dispatch(layChiTietKhoaHocAction(result.data))
        })
        .catch(error => {
            console.log(error);
        })
    };
};

export const layChiTietKhoaHocAction = khoaHoc => {
    return {
        type: LAY_CHI_TIET_KHOA_HOC,
        data: khoaHoc,
    }
}

export const changePageAction = page =>{
    return{
        type: CHANGE_PAGE,
        data: page
    }
}