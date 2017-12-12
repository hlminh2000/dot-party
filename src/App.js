import React from 'react'
import './App.css'
import ToolBar from './components/ToolBar.jsx'
import 'bulma/css/bulma.css'
import CanvasApp from './components/CanvasApp.jsx'

const STYLE = {
  WRAPPER: {
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={STYLE.WRAPPER} className="App">
        <CanvasApp></CanvasApp>
        <ToolBar></ToolBar>
      </div>
    )
  }
}

export default App
