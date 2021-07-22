import React from 'react';
import Navbar from './components/Navbar';
import HomeContainer from './pages/Home/HomeContainer';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <HomeContainer />
      </div>
    </div>
  );
}

export default App;
