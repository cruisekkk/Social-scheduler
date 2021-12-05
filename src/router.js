import React, { useState } from 'react';
import Events from './Pages/Events/Events';
import MySchedule from "./Pages/MySchedule/MySchedule.js"
import History from './Pages/History/History';

const routes = [
    {
        path: '/',
        // exact: true,
        main: <MySchedule/>,
    },
    {
        path: 'history',
        //main: <h2>History</h2>,
        main: <History/>,
    },
    {
        path: 'events',
        //main: <h2>Events</h2>,
        main:<Events/>,
    },
    {
        path: 'contact',
        main: <h2>Contacts</h2>,
    },
];

export default routes;
