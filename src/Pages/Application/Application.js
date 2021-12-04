import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import routes from '../../router';
function Application() {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex' }}>
                <div
                    style={{
                        width: '25%',
                    }}
                >
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                            <Link to="/">My schedule</Link>
                        </li>
                        <li>
                            <Link to="history">History</Link>
                        </li>
                        <li>
                            <Link to="events">Events</Link>
                        </li>
                        <li>
                            <Link to="contact">Contacts</Link>
                        </li>
                    </ul>
                </div>
                <div id="mainApp" style={{ flex: 1 }}>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.main} />
                        ))}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Application;
