import React, { Component } from 'react'
import DemoHOC from './DemoHOC'

class DemoLayoutHOC extends Component {
    render() {
        return (
            <div>
                Demo Layout HOC
            </div>
        )
    }
}

export default DemoHOC(DemoLayoutHOC);
