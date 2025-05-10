import React from 'react';
import Header from './Header';
import './App.css';
import TinderCards from './TinderCards';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router> 
      <Routes>
        <Route path="/chat" element={<h1>I am chat page</h1>} />
        <Route path="/" element={<TinderCards/>} />
        </Routes>
    </Router> 
    </div>
  );
}

export default App;
