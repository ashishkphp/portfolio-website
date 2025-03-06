
// src/components/Dashboard.js
import React from 'react';
import Counter from './Counter'; 
import ToggleText from './ToggleText';
import ToggleTheme from './ToggleTheme';
import ProductCard from './ProductCard';
import Stopwatch from './Stopwatch';
import TemperatureConverter from './TemperatureConverter';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
      <h1>React Components Dashboard</h1>
      </div>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Component Name</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontSize: '40px' }}>Temperature Converter</td>
            <td ><TemperatureConverter /></td>
          </tr> 
          <tr>
            <td style={{ fontSize: '40px' }}>Stopwatch</td>
            <td ><Stopwatch /></td>
          </tr>
          <tr>
            <td style={{ fontSize: '40px' }}>Counter</td>
            <td><Counter /></td>
          </tr> 
          <tr>
            <td style={{ fontSize: '40px' }}>Hide/Show Text</td>
            <td><ToggleText /></td>
          </tr>          
          <tr>
            <td style={{ fontSize: '40px' }}>Product Card</td>
            <td><ProductCard /></td>
          </tr>
          <tr>
            <td style={{ fontSize: '40px' }}>Light/Dark Mode</td>
            <td><ToggleTheme /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;