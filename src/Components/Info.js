import React from 'react';
import {Outlet} from 'react-router-dom';

function Info() {
    return (
        <div className="background"><h2>Products Info</h2><Outlet/></div>
    );
}

export default Info;