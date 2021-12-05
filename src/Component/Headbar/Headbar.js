import React, { useState } from "react";
import "./headbar.less";
function Headbar(){
    const [weekly,setWeekly] = useState(false);
    return(
        <>
            <div id="headbar">
                    <p id="date">15 March 2021</p>
                    <img id="searchIcon" src="http://localhost:8000/search.png"/>
                    <img id="changeviewIcon" src="http://localhost:8000/changeview.png"
                    onClick={()=>setWeekly(weekly=>!weekly)} />
            </div> 
            <img id="weeklyView" src="http://localhost:8000/weeklyview.png"
            style={{
                display:weekly?"block":"none",
            }}/>
        </>
    )
}
export default Headbar