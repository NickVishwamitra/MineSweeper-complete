import React, { useState, createContext, Children, useEffect } from "react";

export const GameRunningContext = createContext({
  isGameRunning: false,
  setIsGameRunning: (_boolean: boolean) => {},
});

export const GameOverContext = createContext({
  isGameOver: false,
  setIsGameOver: (_boolean: boolean) => {},
});

export const MinesVisibleContext = createContext({
  minesVisible: false,
  setMinesVisible: (_boolean: boolean) => {},
});

export const SelectedMineNumContext = createContext({
  selectedButton: 1,
  setSelectedButton: (_num: Number) => {},
});

export const SelectedMineAmountContext = createContext({
  mineAmount: 5,
  setMineAmount: (_num: Number) => {},
});

export const BetAmountContext = createContext({
  betAmount: 0,
  setBetAmount: (_num: Number) => {},
});

export const CorrectSquaresAmountContext = createContext({
  correctAmount: 0,
  setCorrectAmount: (_num: Number) => {},
});

export const InitializeBoardContext = createContext({
  initializeBoard: () => {},
  setInitializeBoard: (func: any) => {},
});
export const BalanceAmountContext = createContext({
  balance: 5000,
  setBalance: (_num: any) => {},
});

function GameProvider({ children, props }: { children: any; props: any }) {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [minesVisible, setMinesVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(1);
  const [mineAmount, setMineAmount] = useState(5);
  const [betAmount, setBetAmount] = useState(0);
  const [correctAmount, setCorrectAmount] = useState(0);
  const [balance, setBalance] = useState(5000);

  const value = { isGameRunning, setIsGameRunning };
  const overValue = { isGameOver, setIsGameOver };
  const visibleValue = { minesVisible, setMinesVisible };
  const selectedButtonValue = { selectedButton, setSelectedButton };
  const mineValue = { mineAmount, setMineAmount };
  const betValue = { betAmount, setBetAmount };
  const correctValue = { correctAmount, setCorrectAmount };
  const balanceValue = { balance, setBalance };

  // useEffect(() => {
  //   setCorrectAmount(0);
  // }, [isGameRunning]);

  return (
    <MinesVisibleContext.Provider {...props} value={visibleValue}>
      <BalanceAmountContext.Provider {...props} value={balanceValue}>
        <SelectedMineAmountContext.Provider {...props} value={mineValue}>
          <CorrectSquaresAmountContext.Provider {...props} value={correctValue}>
            <BetAmountContext.Provider {...props} value={betValue}>
              <SelectedMineNumContext.Provider
                {...props}
                value={selectedButtonValue}
              >
                <GameOverContext.Provider {...props} value={overValue}>
                  <GameRunningContext.Provider {...props} value={value}>
                    {children}
                  </GameRunningContext.Provider>
                </GameOverContext.Provider>
              </SelectedMineNumContext.Provider>
            </BetAmountContext.Provider>
          </CorrectSquaresAmountContext.Provider>
        </SelectedMineAmountContext.Provider>
      </BalanceAmountContext.Provider>
    </MinesVisibleContext.Provider>
  );
}

export default GameProvider;
