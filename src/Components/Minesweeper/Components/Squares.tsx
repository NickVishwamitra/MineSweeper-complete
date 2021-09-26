import "../Minesweeper.css";
import { useState, useEffect, Fragment, useContext, useCallback } from "react";
import {
  GameOverContext,
  GameRunningContext,
  SelectedMineAmountContext,
  SelectedMineNumContext,
  CorrectSquaresAmountContext,
  BetAmountContext,
  MinesVisibleContext,
} from "../../../Contexts/GameContext";

import useSound from "use-sound";
import sound from "../../../sounds/correct.mp3";

const Squares = (props: any, ref: any) => {
  const arr = Array.from(Array(25).keys());
  const [play] = useSound(sound);

  const { mineAmount } = useContext(SelectedMineAmountContext);
  const { selectedButton } = useContext(SelectedMineNumContext);
  const { isGameRunning, setIsGameRunning } = useContext(GameRunningContext);
  const { isGameOver, setIsGameOver } = useContext(GameOverContext);
  const { correctAmount, setCorrectAmount } = useContext(
    CorrectSquaresAmountContext
  );
  const { betAmount, setBetAmount } = useContext(BetAmountContext);
  const { minesVisible, setMinesVisible } = useContext(MinesVisibleContext);

  const [square, setSquare] = useState(new Array(25));
  const [isGreen, setIsGreen] = useState(new Array(25).fill(false));
  const [randArr, setRandArr] = useState(shuffle(arr).slice(0, mineAmount));
  const mineElement = <div className="mine">💣</div>;

  const InitializeBoard = () => {
    setRandArr(shuffle(arr).slice(0, mineAmount));
    updateBoard();
  };
  // //////////////////////////////////////////////////////////////////

  const updateBoard = () => {
    const squareInitial = new Array(25);

    for (let index = 0; index < 25; index++) {
      if (randArr.includes(index)) {
        continue;
      }

      if (isGreen[index] === true) {
        squareInitial[index] = (
          <div
            className={`square`}
            style={{ backgroundColor: "#ff7315" }}
            key={`squares-${index}`}
            id={String(index)}
          ></div>
        );
      } else {
        squareInitial[index] = (
          <div
            className={`square square-${index} `}
            key={`squares-${index}`}
            onClick={isGameRunning ? correctClickHandler : () => {}}
            style={{ backgroundColor: "#6a6262" }}
            id={String(index)}
          ></div>
        );
      }
    }

    randArr.forEach((num: any) => {
      squareInitial[num] = (
        <div
          className={`square square-${num}`}
          key={`squares-${num} `}
          onClick={incorrectClickHandler}
          style={{ backgroundColor: "#6a6262" }}
        >
          {minesVisible ? mineElement : null}
        </div>
      );
    });
    setSquare(squareInitial);
  };

  // //////////////////////////////////////////////////////////////////

  ///////// Handle The click of a mine  //////////////////////////////
  const incorrectClickHandler = () => {
    if (isGameRunning) {
      setIsGameOver(true);
      setMinesVisible(true);
      setIsGameRunning(false);
      updateBoard();
    }
  };
  let multiplier = 0;
  switch (selectedButton) {
    case 1:
      multiplier = 1.25;
      break;
    case 2:
      multiplier = 1.5;
      break;
    case 3:
      multiplier = 2;
      break;
  }
  const correctClickHandler = (event: any) => {
    if (isGameRunning) {
      play();
      const boolGreen = [...isGreen];
      boolGreen[Number(event.target.id)] = true;
      setIsGreen(boolGreen);
      setCorrectAmount(correctAmount + 1);
      updateBoard();
      updateBoard();
      const bet = betAmount * multiplier;
      setBetAmount(Math.round(bet * 100) / 100);
    }
  };
  ////////////////////////////////////////////////////////////////////

  // const quickUpdate = () => {
  //   const sqtest = [...square];
  //   setSquare(sqtest);
  // };

  useEffect(() => {
    if (isGameRunning) {
      // quickUpdate();
      setIsGreen(new Array(25).fill(false));
      InitializeBoard();
      updateBoard();
    } else if (!isGameRunning) {
      setIsGreen(new Array(25).fill(false));
      updateBoard();
    }
  }, [isGameRunning]);

  useEffect(() => {
    InitializeBoard();
  }, [mineAmount]);

  useEffect(() => {
    updateBoard();
  }, [correctAmount]);
  // useEffect(() => {

  useEffect(() => {
    if (isGameOver) {
      setIsGreen(new Array(25).fill(false));
      setMinesVisible(true);
    }
    updateBoard();

    setCorrectAmount(0);
  }, [isGameOver]);
  return <Fragment>{square}</Fragment>;
};

const shuffle = (array: any) => {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default Squares;
