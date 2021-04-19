import React from 'react';
import "./SidebarOption.css";


function SidebarOption({ option = "test", Icon }) {
    return (
        <div className="sidebarOption__icon">
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
    );
}


export default SidebarOption;

