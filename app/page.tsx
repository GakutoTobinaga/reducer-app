"use client"
import React, { useReducer } from 'react';
// 状態の型定義
type State = {
  count: number,
  count2: number;
};
// アクションの型定義
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: "multiply" };
// レデューサー関数
const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 , count2: state.count2 + 2};
    case 'decrement':
      return { count: state.count - 1 , count2: state.count2 - 2};
    case "multiply":
      return { count: state.count * 2 , count2: state.count2 * 4};
    default:
      return state;
  }
};
const counterReducerWithRamdom = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + Math.floor(Math.random() * 10) , count2: state.count2 + Math.floor(Math.random() * 20)};
    case 'decrement':
      return { count: state.count - Math.floor(Math.random() * 10) , count2: state.count2 - Math.floor(Math.random() * 20)};
    case "multiply":
      return { count: state.count * Math.floor(Math.random() * 10) , count2: state.count2 * Math.floor(Math.random() * 20)};
    default:
      console.error('未知のアクションタイプ');
      return state;
  }
};

// カウンターコンポーネント
const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducerWithRamdom, { count: 0 , count2: 0});
  return (
    <>
      <div className="mt-10 w-screen h-screen">
        
        <div className="text-center mb-4">
          <div className='text-xl font-bold'>useReducer, /bank is available</div>
          <p className="text-lg font-semibold">値1: {state.count}</p>
          <p className="text-lg font-semibold">値2: {state.count2}</p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: 'increment' })}
          >
            + to state
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: 'decrement' })}
          >
            - to state
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: "multiply" })}
          >
            * to state
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
