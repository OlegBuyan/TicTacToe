import { useState } from "react";
import PropTypes from "prop-types";
export const useInformarion = () => {
  const [currentPlayer, SetCurrentPlayer] = useState(`X`);
  const [isGameEnded, SetIsGameEnded] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
  const [result, setResult] = useState("Начать игру");
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8],
    [2, 4, 6], // Варианты побед по диагонали
  ];
  const drawSymbol = (i) => {
    let arr = [...field];
    if (arr[i] === "") {
      arr[i] = currentPlayer;
      currentPlayer === "X" ? SetCurrentPlayer("O") : SetCurrentPlayer("X");
      setResult(`Ходит ${currentPlayer === "X" ? `O` : `X`}`);
    }
    setField(arr);
    return getGameResult(arr, i);
  };
  const getGameResult = (arr, i) => {
    WIN_PATTERNS.forEach((patern) => {
      let [a, b, c] = [patern[0], patern[1], patern[2]];
      if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
        SetCurrentPlayer(arr[i]);
        SetIsGameEnded(true);
        setResult(`Победил ${currentPlayer}`);
      } else if (!arr.includes("")) {
        setResult(`Ничья`);
        SetIsGameEnded(true);
      }
    });
  };
  const getToStart = () => {
    SetCurrentPlayer("X");
    setResult("Начать игру");
    setField(["", "", "", "", "", "", "", "", ""]);
    SetIsGameEnded(false);
  };
  return {
    field,
    currentPlayer,
    isGameEnded,
    result,
    drawSymbol,
    getToStart,
  };
};
PropTypes.useInformarion = {
  field: PropTypes.array,
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  result: PropTypes.string,
};
