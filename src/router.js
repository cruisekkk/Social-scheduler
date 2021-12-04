import React, { useState } from 'react';
import MySchedule from "./Pages/MySchedule/MySchedule.js"
const routes = [
    {
        path: '/',
        // exact: true,
        main: <MySchedule/>,
    },
    {
        path: 'history',
        main: <h2>History</h2>,
    },
    {
        path: 'events',
        main: <h2>Events</h2>,
    },
    {
        path: 'contact',
        main: <h2>Contacts</h2>,
    },
];

export default routes;
