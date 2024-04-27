import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert';
/*import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import About from './components/About';
import App1 from './App1';*/
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = document.getElementById('color').value;
      showAlert('Dark Mode enabled.', 'success');
      document.title = 'TextUtil - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtil is amazing...';
      }, 2000);
      setInterval(() => {
        document.title = 'Install the TextUtil now...';
      }, 1500);
    } else {
      setMode('light');
      showAlert('Light Mode enabled.', 'success');
      document.body.style.backgroundColor = document.getElementById('color').value;
      document.title = 'TextUtil - Light Mode';
    }
  };
return (
  <>
     <Navbar mode={mode} toggle={toggle} title="text" />
        <Alert alert={alert} />
        <TextForm heading="Enter the Text" mode={mode} toggle={toggle} alert={alert} showAlert={showAlert} />
  </>
);
  /*
  return (
    <Router>
      <div>
        <Navbar mode={mode} toggle={toggle} title="text" />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route  path="/home" element={<TextForm heading="Enter the Text" mode={mode} toggle={toggle} alert={alert} showAlert={showAlert} />}/>
          <Route exact path="/app1" element={<App1/>}></Route>
        </Routes>                        
        </div>
    </Router>
  );*/
}

export default App;
