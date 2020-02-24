import React from 'react';
import Header from './Header'

const UserLayout = props => {
    return (
        // Cách viết thứ I
        // <>
        //     <Header/>
        // </>
        // NOTE  Cách viết thứ II: sử dụng Fragment để chứa nhiều component khác mà không cần sử dụng div, khi render ra khog có
        <React.Fragment>
            <Header/>  
            {/* Carousel */}
            {props.children}
            {/* Footer */}
        </React.Fragment>
    )
};

export default UserLayout;
