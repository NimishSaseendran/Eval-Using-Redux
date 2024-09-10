import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { evaluate, reset } from './redux/evalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  const [num, setNum] = useState('');
  const res = useSelector((store) => store.evalReducer.eval);
  const dispatch = useDispatch();
  
  const handleCalculate = () => {
    dispatch(evaluate(eval(num)));
    setNum('');
  };

  const handleReset = () => {
    dispatch(reset());
    setNum('');
  };
  
  return (
    <>
      <div className='d-flex align-items-center justify-content-center' style={{height:'100vh', backgroundColor:'#a6a6a6'}}>
        <div className='p-5 shadow w-50 ' style={{backgroundColor:'#cccccc'}}>
          <h2 className='text-center mb-4'>Calculation</h2>
          <h3 className='text-center mb-4 fw-bold'>{res}</h3>
          <input 
            type="text" 
            className='form-control mb-3' 
            value={num} 
            onChange={(e) => setNum(e.target.value)} 
            placeholder='Enter the Expression to evaluate, ( 5 + 5 )' 
          />
          <div className='d-flex justify-content-between'>
            <button className='btn btn-success w-50' onClick={handleCalculate}>Calculate</button>
            <button className='btn btn-danger w-25' onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
