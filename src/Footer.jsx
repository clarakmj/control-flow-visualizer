import React from "react";
import App from "./App";

/***
 * Footer component to display dynamic copyright year and names
 *
 * @returns {JSX.Element}
 * @constructor
 */
function Footer() {
    const currentDate = new Date();
    return <p>
        Copyright ©{currentDate.getFullYear()} Tiger Z & Clara K
    </p>
}

export default Footer;