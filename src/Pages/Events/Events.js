import React from "react"
import "./event.less";
function Events() {
    return(
           <>
                <h2>To-do List</h2>
                <div id="eventsContainer">
                    <div id="event1" className="event"></div>
                    <div id="event2" className="event"></div>
                    <div id="event3" className="event"></div>
                    <div id="event4" className="event"></div>
                    <div id="event5" className="event"></div>
                </div>
           </>
    )
}

export default Events