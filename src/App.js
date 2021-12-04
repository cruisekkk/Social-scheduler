import React, { useState } from 'react';
import Homepage from './Pages/Homepage/Homepage.js';
import Applicaiton from './Pages/Application/Application.js';
import 'antd/dist/antd.css'
function App() {
    const [isLogedIn, setIsLogedIn] = useState(false);

    const renderPage = () => {
      if (isLogedIn) {
        return (
        <div id="app">
          <Homepage/>
        </div>)
      } else {
        return (
          <div id="app">
          <Application/>
        </div>
        )
      }
    }
    return renderPage();
}


export default App;
