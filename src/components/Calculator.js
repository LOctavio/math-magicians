import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const addNumber = (event, setNext, setOperationOutput, args) => {
  const { next } = calculate(args, event.target.textContent);
  setNext(next);
  const { total, operation } = args;
  setOperationOutput((total && operation && next) ? (total + operation + next) : null);
};

const addOperation = (event, setTotal, setNext, setOperation, setOperationOutput, args) => {
  const { total, next, operation } = calculate((args), event.target.textContent);
  setTotal(total);
  setNext(next);
  setOperation(operation);
  setOperationOutput((total && operation) ? (total + operation) : null);
};

const Calculator = (props) => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [operationOutput, setOperationOutput] = useState(null);
  const initValue = props;
  const args = {
    total, next, operation, operationOutput,
  };
  return (
    <div className="calculator">
      <input type="text" className="calculator-input" value={operationOutput || next || total || initValue.defaultValue} onChange={addNumber || addOperation} />
      <div className="first-row">
        <button type="button" onClick={(event) => addOperation(event, setTotal, setNext, setOperation, setOperationOutput, args)}>AC</button>
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>+/-</button>
        <button type="button" onClick={(event) => addOperation(event, setTotal, setNext, setOperation, setOperationOutput, args)}>%</button>
        <button type="button" onClick={(event) => addOperation(event, setTotal, setNext, setOperation, setOperationOutput, args)}>÷</button>
      </div>
      <div className="second-row">
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>7</button>
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>8</button>
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>9</button>
        <button type="button" onClick={(event) => addOperation(event, setTotal, setNext, setOperation, setOperationOutput, args)}>x</button>
      </div>
      <div className="third-row">
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>4</button>
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>5</button>
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>6</button>
        <button type="button" onClick={(event) => addOperation(event, setTotal, setNext, setOperation, setOperationOutput, args)}>-</button>
      </div>
      <div className="fourth-row">
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>1</button>
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>2</button>
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>3</button>
        <button type="button" onClick={(event) => addOperation(event, setTotal, setNext, setOperation, setOperationOutput, args)}>+</button>
      </div>
      <div className="fifth-row">
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>0</button>
        <button type="button" onClick={(event) => addNumber(event, setNext, setOperationOutput, args)}>.</button>
        <button type="button" onClick={(event) => addOperation(event, setTotal, setNext, setOperation, setOperationOutput, args)}>=</button>
      </div>
    </div>
  );
};
export default Calculator;
