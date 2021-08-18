import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.addNumber = this.addNumber.bind(this);
    this.addOperation = this.addOperation.bind(this);
  }

  addNumber(event) {
    const { next } = calculate(this.state, event.target.textContent);
    this.setState({ next });
  }

  addOperation(event) {
    const { total, next, operation } = calculate(this.state, event.target.textContent);
    this.setState({ total, next, operation });
  }

  render() {
    const { next, total } = this.state;
    const { defaultValue } = this.props;
    return (
      <div className="calculator">
        <input type="text" className="calculator-input" value={next || total || defaultValue} onChange={this.addNumber || this.addOperation} />
        <div className="first-row">
          <button type="button" onClick={this.addOperation}>AC</button>
          <button type="button" onClick={this.addNumber}>+/-</button>
          <button type="button" onClick={this.addOperation}>%</button>
          <button type="button" onClick={this.addOperation}>÷</button>
        </div>
        <div className="second-row">
          <button type="button" onClick={this.addNumber}>7</button>
          <button type="button" onClick={this.addNumber}>8</button>
          <button type="button" onClick={this.addNumber}>9</button>
          <button type="button" onClick={this.addOperation}>x</button>
        </div>
        <div className="third-row">
          <button type="button" onClick={this.addNumber}>4</button>
          <button type="button" onClick={this.addNumber}>5</button>
          <button type="button" onClick={this.addNumber}>6</button>
          <button type="button" onClick={this.addOperation}>-</button>
        </div>
        <div className="fourth-row">
          <button type="button" onClick={this.addNumber}>1</button>
          <button type="button" onClick={this.addNumber}>2</button>
          <button type="button" onClick={this.addNumber}>3</button>
          <button type="button" onClick={this.addOperation}>+</button>
        </div>
        <div className="fifth-row">
          <button type="button" onClick={this.addNumber}>0</button>
          <button type="button" onClick={this.addNumber}>.</button>
          <button type="button" onClick={this.addOperation}>=</button>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};

export default Calculator;
