import React, { useState } from 'react';
const routes = [
    {
        path: '/',
        // exact: true,
        main: <h2>My schedule</h2>,
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
