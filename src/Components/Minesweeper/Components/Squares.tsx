import "../Minesweeper.css";
import { useState, useEffect, Fragment } from "react";
import React from "react";

//Create array of objects with item key set to squares
const Squares = (props: {
  className: any;
  selectedMineNumButton: number;
  props: any;
}) => {
  const [square, setSquare] = useState(new Array(25));
  const [numOfMines, setNumOfMines] = useState(5);

  const checkmines = (num: number) => {
    if (numOfMines != num) {
      setNumOfMines(num);
    }
  };

  const arr = Array.from(Array(25).keys());
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

  const newarr = shuffle(arr).slice(0, numOfMines);
  console.log(newarr);
  switch (props.props.selectedButton) {
    case 1:
      checkmines(5);
      break;
    case 2:
      checkmines(7);
      break;
    case 3:
      checkmines(9);
      break;
  }

  for (let index = 0; index < 25; index++) {
    square[index] = (
      <a className={`square square-${index} `} key={`squares-${index} `}></a>
    );
  }

  newarr.forEach((num: any) => {
    square[num] = (
      <a className={`square square-${num} ee `} key={`squares-${num} `}>
        <div className="mine">💣</div>
      </a>
    );
  });
  return <Fragment>{square}</Fragment>;
};

export default Squares;
