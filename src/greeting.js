import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/messageReducer';

const Greeting = () => {
  const message = useSelector((state) => {
    return state.message;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <h1>Secret message: {message}</h1>
    </div>
  );
};

export default Greeting;
