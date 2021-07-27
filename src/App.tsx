import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomeContainer from './pages/Home/HomeContainer';

function App() {
  return (
    <div>
      <Navbar hasSidebar />
      <div>
        <HomeContainer />
      </div>
    </div>
  );
}

export default App;
