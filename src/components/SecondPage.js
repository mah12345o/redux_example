// src/components/SecondPage.js
import { useDispatch } from 'react-redux';
import { toggleDiv } from '../actions';

function SecondPage() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleDiv())}>Toggle div on First Page</button>
  );
}

export default SecondPage;