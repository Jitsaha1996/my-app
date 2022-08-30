import React from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import { PortfolioProvider } from './Components/PortfolioProvider';



function App() {
  return (
    <div >
      <ErrorBoundary>
     
      
    <PortfolioProvider/>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
