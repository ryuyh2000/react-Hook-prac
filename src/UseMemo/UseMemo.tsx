import React from "react";

const delayCal1 = (num: number): number => {
  for (let i = 0; i < 999999999; i++) {}
  return num + 1;
};

const notDelayCal1 = (num: number): number => {
  return num + 1;
};

const UseMemo = () => {
  const [delayNumber, setdelayNumber] = React.useState(0);
  const [notDelayNumber, setnotDelayNumber] = React.useState(0);

  const memoDelay = React.useMemo(() => {
    return delayCal1(delayNumber);
  }, [delayNumber]);

  const memoNotDelay = React.useMemo(() => {
    return notDelayCal1(notDelayNumber);
  }, [notDelayNumber]);

  return (
    <>
      <h4>using useMemo</h4>
      <button
        onClick={() => {
          setdelayNumber(delayNumber + 1);
        }}
      >
        delay :+1
      </button>

      <button
        onClick={() => {
          setnotDelayNumber(notDelayNumber + 1);
        }}
      >
        not delay :+1
      </button>

      <div>1:{memoDelay}</div>
      <div>2:{memoNotDelay}</div>
    </>
  );
};

export default UseMemo;
//not delay 해도 delay 안걸림
/* 
let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분
let seconds = today.getSeconds();  // 초
let milliseconds = today.getMilliseconds(); // 밀리초 */
