// HOC Higher other Component NOTE 
// 1. Func nhân vào 1 Component và return về 1 Component mới 

import React, { Component } from 'react'

// HOC đối với function component
const DemoHOC = Component => {
    return () => {
        return (
            <div className="container">
                <Component/>
            </div>
        );
    };
};

//HOC đối với class component
const DemoClassHOC = Component => {
    return class DemoHOC extends React.Component{
        render() {
            return (
                <div className="container">
                    <Component/>
                </div>
            )
        }
    }
}

export default DemoHOC;