import React from "react";
import useFetchCoursesList from "../Hooks/useFetchCoursesList";
import PaginationComponent from "../Layout/Pagination";

const CustomHooksDanhSachKhoaHoc = props => {
  const {
    danhSachKhoaHoc,
    currentPage,
    totalCount,
    onChangePage
  } = useFetchCoursesList();
  console.log(props);
  return (
    <div>
      <h2>Danh Sach Khoa Hoc</h2>
      <div className="row">
        {danhSachKhoaHoc.map(item => (
          <div className="card col-4">
            <img className="card-img-top" src={item.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{item.tenKhoaHoc}</h4>
              <p className="card-text">{item.moTa}</p>
              <button
                className="btn btn-success"
                onClick={() =>
                  // NOTE push là đẩy trang web mới vào chỗ trang web cũ, replace là thay thế trang web cũ thành trang web mới
                  // Dùng replace khi ko muốn người dùng bakc về trang web cũ như signin
                  // () => props.history.push(`/course-detail/${item.maKhoaHoc}`)
                  props.history.push(`/course-detail/${item.maKhoaHoc}`)
                }
              >
                Chi tiết
              </button>
            </div>
            <div className="row"></div>
          </div>
        ))}
      </div>
      <PaginationComponent
        currentPage={currentPage} // Page hiện tại
        pageSize={8} // constant cố định số phần tử trong một trang mà bạn muốn
        totalCount={totalCount} // tổng số phần tử BE trả về
        onChangePage={onChangePage} // callback props để truyền page từ con lên cha
      />
    </div>
  );
};

export default CustomHooksDanhSachKhoaHoc;
