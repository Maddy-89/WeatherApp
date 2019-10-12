import React from 'react';
import CurrentWeather from './CurrentWeather';

function App() {
  return (
    <div className="App">
      <CurrentWeather city="London" temperature="13" />
      <CurrentWeather city="Perth" temperature="34" />
      <CurrentWeather city="Sydney" temperature="40" /> 
    </div>
  );
}

export default App;
