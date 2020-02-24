import React, { Component } from 'react'

const DemoHOCProps = Component => {
    return () => {
        const name = "CyberSoft";
        return <Component name={name}/>
    };
};

const ComponentUsingHOC = props => {
    console.log(props);
    return <div>ComponentUsingHOC</div>;
}

export default DemoHOCProps(ComponentUsingHOC);