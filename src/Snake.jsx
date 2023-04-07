import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const BLOCK_SIZE = Array.from(Array(36).keys());

const Snake = () => {
  const changeTarget = () => {
    return Math.ceil(Math.random() * BLOCK_SIZE.length);
  };

  const calculateBorderIndices = () => {
    let gridSize = Math.sqrt(BLOCK_SIZE.length);
    // this will initialize the borderIndices with topBorder elements, i.e if n = 5 , it will populate 0,1,2,3,4
    let topBorderIndices = Array.from(Array(gridSize).keys());
    let leftBorderIndices = [];
    let rightBorderIndices = [];
    let bottomBorderIndices = [];
    let cornerIndices = [
      0,
      gridSize - 1,
      gridSize * gridSize - 1,
      gridSize * (gridSize - 1)
    ];
    for (let i = 0; i < gridSize; i++) {
      leftBorderIndices.push(i * gridSize);
      bottomBorderIndices.push((gridSize - 1) * gridSize + i);
      rightBorderIndices.push(gridSize + gridSize * i - 1);
    }
    return {
      topBorderIndices: topBorderIndices,
      leftBorderIndices: leftBorderIndices,
      rightBorderIndices: rightBorderIndices,
      bottomBorderIndices: bottomBorderIndices,
      cornerIndices: cornerIndices
    };
  };

  const [target, setTarget] = useState(() => changeTarget());

  const [borderIndices, setBorderIndices] = useState(() =>
    calculateBorderIndices()
  );
  const [gridSize, setGridSize] = useState(Math.sqrt(BLOCK_SIZE.length));

  const [currentPositionOfSnake, setCurrentPositionOfSnake] = useState(0);

  const [snakeSize, setSnakeSize] = useState(1);

  const [score, setScore] = useState(0);

  const [gameOver, setGameOver] = useState(false);

  // snake should autoMove in the last direction input recieved from user
  // in the begining the snake will always move right
  const autoMoveSnake = () => {};
  const currentPositionRef = useRef(currentPositionOfSnake);

  useEffect(() => {
    currentPositionRef.current = currentPositionOfSnake;
  }, [currentPositionOfSnake]);

  const moveSnake = (keyCode) => {
    console.log(
      currentPositionOfSnake,
      " value of currentPosition in keyEvent"
    );

    if (keyCode === "w") {
      //move up
      checkSnakeBorderCollision(currentPositionRef.current - gridSize, "w");
    } else if (keyCode === "s") {
      //move down
      checkSnakeBorderCollision(currentPositionRef.current + gridSize, "s");
    } else if (keyCode === "a") {
      //move left
      checkSnakeBorderCollision(currentPositionRef.current - 1, "a");
    } else if (keyCode === "d") {
      //move right
      checkSnakeBorderCollision(currentPositionRef.current + 1, "d");
    }
  };

  useEffect(() => {
    console.log(currentPositionOfSnake, "currentPositionOfSnake");
  }, [currentPositionOfSnake]);

  const checkSnakeBorderCollision = (indexToBeChecked, movementDirection) => {
    console.log(indexToBeChecked, movementDirection, "indexToBeChecked");

    if (
      currentPositionRef.current === borderIndices.cornerIndices[0] &&
      (movementDirection === "w" || movementDirection === "a")
    ) {
      setGameOver(true);
    } else if (
      currentPositionRef.current === borderIndices.cornerIndices[1] &&
      (movementDirection === "w" || movementDirection === "d")
    ) {
      setGameOver(true);
    } else if (
      currentPositionRef.current === borderIndices.cornerIndices[2] &&
      (movementDirection === "s" || movementDirection === "d")
    ) {
      setGameOver(true);
    } else if (
      currentPositionRef.current === borderIndices.cornerIndices[3] &&
      (movementDirection === "s" || movementDirection === "a")
    ) {
      setGameOver(true);
    } else if (
      borderIndices.topBorderIndices.indexOf(currentPositionRef.current) !== -1 &&
      movementDirection === "w"
    ) {
      setGameOver(true);
    } else if (
      borderIndices.leftBorderIndices.indexOf(currentPositionRef.current) !== -1 &&
      movementDirection === "a"
    ) {
      setGameOver(true);
    } else if (
      borderIndices.rightBorderIndices.indexOf(currentPositionRef.current) !== -1 &&
      movementDirection === "d"
    ) {
      setGameOver(true);
    } else if (
      borderIndices.bottomBorderIndices.indexOf(currentPositionRef.current) !==
        -1 &&
      movementDirection === "s"
    ) {
      setGameOver(true);
    } else setCurrentPositionOfSnake(indexToBeChecked);
  };

  useEffect(() => {
    "reloaded";
  });

  useEffect(() => {
    // let interval = setInterval(() => {
    //   //autoMoveSnake();
    // }, 2000);

    window.addEventListener("keyup", (e) => {
      moveSnake(e.key);
    });

    // return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {BLOCK_SIZE.map((item, index) => {
        return (
          <Block
            key={index}
            isThisTarget={index === target ? true : false}
            isThisSnakeBody={index === currentPositionOfSnake ? true : false}
          >
            {item}
          </Block>
        );
      })}
      {gameOver && <h1>GAME OVER BITCH</h1>}
      <p> Your Current Score is: {score} </p>
    </Container>
  );
};

export default Snake;
// **** STYLED ****

const Block = styled.div`
  width: 6rem;
  height: 6rem;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isThisTarget ? "red" : props.isThisSnakeBody ? "green" : "fff"};
  color: ${(props) =>
    props.isThisTarget || props.isThisSnakeBody ? "#fff" : "#000"};
`;

const Container = styled.div`
  width: 36rem;
  height: 36rem;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
`;
