import React, { useState } from 'react';
import './CarbonCalculator.css';

function CarbonCalculator() {
  const [homeSize, setHomeSize] = useState(1500);
  const [energySource, setEnergySource] = useState('mixed');
  const [transportation, setTransportation] = useState(10000);
  const [diet, setDiet] = useState('mixed');
  const [result, setResult] = useState(null);

  const calculateFootprint = () => {
    // Simplified calculation for demonstration
    let footprint = 0;
    
    // Home energy calculation
    if (energySource === 'renewable') {
      footprint += homeSize * 0.5;
    } else if (energySource === 'mixed') {
      footprint += homeSize * 2;
    } else {
      footprint += homeSize * 4;
    }
    
    // Transportation calculation
    footprint += transportation * 0.2;
    
    // Diet calculation
    if (diet === 'vegetarian') {
      footprint += 500;
    } else if (diet === 'vegan') {
      footprint += 300;
    } else {
      footprint += 1000;
    }
    
    setResult(Math.round(footprint));
  };

  return (
    <main className="page calculator-page">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/api/placeholder/1440/400" alt="Carbon Calculator" />
        </div>
        <div className="hero-content">
          <h1>Carbon Footprint Calculator</h1>
          <p>Estimate your environmental impact and learn how to reduce it</p>
        </div>
      </section>

      <section className="calculator-section container">
        <div className="calculator-form">
          <div className="form-group">
            <label htmlFor="home-size">Home Size (sq ft):</label>
            <input 
              type="range" 
              id="home-size" 
              min="500" 
              max="5000" 
              value={homeSize}
              onChange={(e) => setHomeSize(parseInt(e.target.value))}
            />
            <span>{homeSize} sq ft</span>
          </div>

          <div className="form-group">
            <label htmlFor="energy-source">Primary Energy Source:</label>
            <select 
              id="energy-source" 
              value={energySource}
              onChange={(e) => setEnergySource(e.target.value)}
            >
              <option value="renewable">100% Renewable</option>
              <option value="mixed">Mixed Sources</option>
              <option value="fossil">Fossil Fuels</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="transportation">Annual Miles Driven:</label>
            <input 
              type="range" 
              id="transportation" 
              min="0" 
              max="20000" 
              value={transportation}
              onChange={(e) => setTransportation(parseInt(e.target.value))}
            />
            <span>{transportation.toLocaleString()} miles</span>
          </div>

          <div className="form-group">
            <label htmlFor="diet">Primary Diet:</label>
            <select 
              id="diet" 
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
            >
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>

          <button className="calculate-button" onClick={calculateFootprint}>
            Calculate My Footprint
          </button>

          {result && (
            <div className="result-section">
              <h3>Your Estimated Annual Carbon Footprint:</h3>
              <div className="result-value">{result} kg CO₂</div>
              <div className="result-comparison">
                <p>This is equivalent to:</p>
                <ul>
                  <li>{Math.round(result / 20)} trees needed to offset</li>
                  <li>{Math.round(result / 100)} flights from NY to London</li>
                </ul>
              </div>
              <div className="recommendations">
                <h4>Ways to Reduce:</h4>
                <ul>
                  <li>Switch to renewable energy sources</li>
                  <li>Reduce home energy consumption</li>
                  <li>Use public transportation or carpool</li>
                  <li>Adopt a plant-based diet</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default CarbonCalculator;