// FilterButtons.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markAllCompleted } from '../redux/actions';

const MarkAllButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex space-x-4 items-center">
      <button
        className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default MarkAllButton;
