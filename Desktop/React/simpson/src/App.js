import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
function App() {
  return (
    <div className="App">
     <Navbar />
     <QuoteCard/>
     <QuoteCard/>

    </div>
  );
}

export default App;
