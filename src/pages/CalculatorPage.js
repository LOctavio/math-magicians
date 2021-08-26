import React from 'react';
import Calculator from '../components/Calculator';
import '../App.css';

const CalculatorPage = () => (
  <div className="calculator-container">
    <div>
      <h2>Lets do some math</h2>
    </div>
    <Calculator defaultValue="0" />
  </div>
);

export default CalculatorPage;
