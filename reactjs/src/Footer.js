import React from 'react';
import { useStateValue } from './StateProvider';
import './Footer.css';


function Footer({ spotify }) {
    const [{ token, item, playing }, dispatch] = useStateValue();


    return (
        <div className="footer">
            <h1>I'm the footer</h1>
        </div>
    )
}

export default Footer
