import React from 'react';
import PropTypes from 'prop-types';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total } = this.props;
    return (
      <div className="calculator">
        <input type="text" id="calculator-input" value={total} />
        <div>
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button">÷</button>
        </div>
        <div>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">x</button>
        </div>
        <div>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">-</button>
        </div>
        <div>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">+</button>
        </div>
        <div>
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button">=</button>
        </div>
      </div>
    );
  }
}

Calculator.defaultProps = {
  total: 0,
};

Calculator.propTypes = {
  total: PropTypes.number,
};

export default Calculator;