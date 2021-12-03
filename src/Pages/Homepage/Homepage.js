import React, { useState } from 'react';
import './homepage.less';
import '../../Component/Guidance.js'
function Homepage() {
  const [status, setStatus] = useState(0);
    return (
        <>
            <div id="homepage"></div>
            <div id="icon">
                123 <div id="logo">456</div>{' '}
            </div>
            <p>App demo</p>
            {/* { status === null ? < Guidance/> : null} */}
            {/* { status === "signin" ? <Signin/> : null}
            { status === "register" ? <Register/>: null} */}
        </>
    );
}

export default Homepage;
