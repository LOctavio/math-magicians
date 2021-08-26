import React from 'react';
import Calculator from './pages/CalculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Calculator />
        <Home />
        <Quote />
      </>
    );
  }
}

export default App;
