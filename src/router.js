import React, { useState } from 'react';
import Events from './Pages/Events/Events';
import Activity from './Component/Activity/Activity';
const routes = [
    {
        path: '/',
        // exact: true,
        //main: <h2>My schedule</h2>,
        main:<Activity/>,
    },
    {
        path: 'history',
        main: <h2>History</h2>,
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
