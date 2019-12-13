import React from 'react';
import Pages from './Pages'
import Widgets from './Widgets';
import './App.css';

function App() {
    return (
      <div>
        <Widgets/>
        <div className="container">
          <div className="sidebar">
            <Pages/>
          </div>
          <iframe id="page-loader" title="webpage" name="page-loader" className="iframe"/>
        </div>
      </div>
    );
}

export default App;
