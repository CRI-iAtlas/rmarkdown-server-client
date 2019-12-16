import React, {useState} from 'react';
import Pages from './Pages'
import Widgets from './Widgets';
import './App.css';

function App() {
    const [src, setSrc] = useState()
    return (
      <div>
        <Widgets/>
        <div className="container">
          <div className="sidebar">
            <Pages setSrc={setSrc}/>
          </div>
          <iframe id="page-loader" title="webpage" name="page-loader" className="iframe" src={src}/>
        </div>
      </div>
    );
}

export default App;
