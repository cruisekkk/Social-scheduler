import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import routes from '../../router';
import AppCalendar from '../../Component/AppCalendar/AppCalendar';
import ShareBox from '../../Component/ShareBox/ShareBox';
import { Modal, Timeline } from 'antd';
import ModifyRecord from '../../Component/ModifyRecord/ModifyRecord';

function Application() {
    const [selectedMenu, setSelectMenu] = useState('My schedule');
    const getSidebar = menuName => {
        return (
            <div
                style={{
                    height: '100',
                    color: menuName === selectedMenu ? '#1A2D54' : '#758095',
                    fontSize: '20px',
                    padding: '5px',
                    fontWeight: menuName === selectedMenu ? 'bold' : 'normal',
                }}
                onClick={() => setSelectMenu(menuName)}
            >
                {menuName}
            </div>
        );
    };
    return (
        <BrowserRouter>
            <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
                <div
                    style={{
                        width: '18%',
                        backgroundColor: '#EEEEEE',
                    }}
                >
                    <ul style={{ padding: 0 }}>
                        <p style={{ fontSize: '24px', color: 'gray', textAlign: 'center' }}>Menu</p>
                        <li>
                            <Link to="/">{getSidebar('My schedule')}</Link>
                        </li>
                        <li>
                            <Link to="history">{getSidebar('History')}</Link>
                        </li>
                        <li>
                            <Link to="events">{getSidebar('Events')}</Link>
                        </li>
                    </ul>
                </div>
                <div id="mainApp" style={{ flex: 1, width: '54%' }}>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.main} />
                        ))}
                    </Routes>
                </div>
                <div
                    style={{
                        width: '28%',
                        backgroundColor: '#2A2E41',
                    }}
                >
                    <AppCalendar />
                    <ShareBox />
                    {/* <ModifyRecord/> */}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Application;
