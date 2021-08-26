import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="*">
          <h1>No match for this page</h1>
        </Route>
      </Switch>
    );
  }
}

export default App;
