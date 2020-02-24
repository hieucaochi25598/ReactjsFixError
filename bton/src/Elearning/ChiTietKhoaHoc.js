import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {layChiTietKhoaHoc} from '../redux/actions/QuanLyKhoaHoc';
import {Card, CardImg, CardBody} from 'reactstrap'

const ChiTietKhoaHoc = ({chiTietKhoaHoc, layChiTietKhoaHoc, ...props}) => {
    useEffect(() => {
        // Lấy mã khóa học từ trên url xuống
        const {maKhoaHoc} = props.match.params;
        // Dispatch action gọi API
        layChiTietKhoaHoc(maKhoaHoc);
    }, []);

    return (
        <div>
            <h1>Chi Tiết Khóa Học</h1>
            <Card className="col-md-8">
                <CardImg top src={chiTietKhoaHoc.hinhAnh} width="100%" />
                <CardBody>
                    <p>{chiTietKhoaHoc.tenKhoaHoc}</p>
                    <p>{chiTietKhoaHoc.moTa}</p>
                </CardBody>
            </Card>
        </div>
    )
};

const mapStateToProps = state => ({
    chiTietKhoaHoc: state.quanLyKhoaHoc.chiTietKhoaHoc
});

const mapDispatchToProps = dispatch => ({
    layChiTietKhoaHoc: maKhoaHoc => dispatch(layChiTietKhoaHoc(maKhoaHoc))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChiTietKhoaHoc);
