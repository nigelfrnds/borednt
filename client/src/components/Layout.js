import React from 'react';
import '../css/Layout.css';

const Layout = (props) => {
    return (
        <div className="layout">
            <div className="content">{props.children}</div>
        </div>
    );
}

export default Layout;