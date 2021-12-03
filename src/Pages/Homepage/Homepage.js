import React, { useState } from 'react';
import './homepage.less';
import Guidance from '../../Component/Guidance/Guidance'
import Register from '../../Component/Register/Register'
import SignIn from '../../Component/SignIn/SignIn'


function Homepage() {
  const [status, setStatus] = useState("signin");
    return (
        <>
            <div id="homepage">
                <img id="icon"
                    src="http://localhost:8000/1.png"
                />        
                <div id="titleBundle">
                    <p id="title">SCHEDULE TOGETHER,</p>  
                    <p id="title">BECOME BETTER</p>
                </div>
                <div id="entry">
                    { status === null ? < Guidance/> : null}
                    { status === "signin" ? <SignIn/> : null}
                    { status === "register" ? <Register/>: null}
                </div>
            </div>
            
            
        </>
    );
}

export default Homepage;
