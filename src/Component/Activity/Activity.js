import React from "react"
import './activity.less';
function Activity() {
    return(
           <>
                <div className="activity-block">
                    <div className="side"/>
                    <div className="delete-block">
                        <img src="http://localhost:8000/trashbin.png"/>
                    </div>
                    <div className="activity-text">
                        <p>Meet Sophia in Airport</p>
                        <p>participants: Sophia, her boyfriend, her dog</p>
                        {/* <p>place: Google/ Map link</p> */}
                    </div>
                    <div className="activity-timereduce"></div>
                    <div className="activity-timeextend"></div>
                </div>
           </>
    )
}

export default Activity