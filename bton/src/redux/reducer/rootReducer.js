import { combineReducers} from 'redux';
import quanLySinhVien from './QuanLySinhVien';
import gameBauCua from './GameBauCua';
import quanLyKhoaHoc from './QuanLyKhoaHoc';
import quanLyNguoiDung from './QuanLyNguoiDung';

export default combineReducers ({
    quanLySinhVien: quanLySinhVien,
    gameBauCua: gameBauCua,
    quanLyKhoaHoc,
    quanLyNguoiDung:quanLyNguoiDung
});