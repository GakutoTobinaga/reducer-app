"use client"
import React, { useReducer } from 'react';

// 状態の型定義
type State = {
  bank_account: number,
  money: number,
};

// アクションの型定義
type Action = 
  | { type: 'makeDeposit' }
  | { type: 'makeWithdrawal' }
  | { type: "updateMoney"; payload: number; };

// レデューサー関数
const bankReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'makeDeposit':
      return { bank_account: state.bank_account + state.money , money: 0 };
    case 'makeWithdrawal':
      return { bank_account: state.bank_account - state.money , money: 0 };
    case "updateMoney":
      return { ...state, money: action.payload }
    default:
      return state;
  }
};

// カウンターコンポーネント
const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(bankReducer, { bank_account: 0, money: 0 });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'updateMoney', payload: parseInt(event.target.value) });
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <div className="text-center mb-4">
            <div>
                <input
                type="number"
                name="money"
                value={state.money}
                onChange={handleInputChange}
                />
            </div>
          <p className="text-lg font-semibold">預金: {state.bank_account}</p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: 'makeDeposit' })}
          >
            Make a Deposit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch({ type: 'makeWithdrawal' })}
          >
            Make a Withdrawal
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
