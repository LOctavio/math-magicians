import React from 'react';
import Calculator from './pages/CalculatorPage';
import Home from './pages/Home';

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
      </>
    );
  }
}

export default App;
