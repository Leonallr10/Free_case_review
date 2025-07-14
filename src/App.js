import React from 'react';
import './App.css';
import FreeCasePanel from './components/FreeCasePanel';

function App() {
  return (
    <div className="App">
      <FreeCasePanel />  {/* ✅ ClaimForm is already inside FreeCasePanel */}
    </div>
  );
}

export default App;
