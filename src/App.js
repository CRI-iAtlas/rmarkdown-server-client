import React from 'react';
import './App.css';

const pages = [
  {name:"Page 1", url: "/page1"},
  {name:"Page 2", url: "/page2"},
  {name:"Page 3", url: "/page3"}
]

function App() {
  return (
    <div>
      <div className="header"></div>
      <div className="container">
      <div className="sidebar">
        {pages.map(page => {
          return <div className="sidebar-item" onClick={()=>fetchPage(page.url)}>{page.name}</div>
        })}
      </div>
      <iframe id="page-loader" title="webpage" name="page-loader" className="iframe"></iframe>
      </div>
    </div>
  );
}

function fetchPage(url){
  fetch(`http://localhost:3000${url}`)
  .then(res => res.text())
  .then(data => {
    console.log(data)
    const iframe = document.getElementById('page-loader')
    iframe.srcdoc = data
  })
  .catch(e => {
    console.log(e)
  })
}

export default App;
