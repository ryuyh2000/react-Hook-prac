import React from "react";
import Recording from "./Recording";

interface funcType {
  num: number;
  time: string;
}

const getTime = () => {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const millie = time.getMilliseconds();

  return `${hour}:${min}:${sec}:${millie}`;
};

const delayCal1 = (num: number): funcType => {
  for (let i = 0; i < 999999999; i++) {}
  const time = getTime();
  const object = {
    num: num + 1,
    time,
  };

  return object;
};

const notDelayCal1 = (num: number): funcType => {
  const time = getTime();
  const object = {
    num: num + 1,
    time,
  };

  return object;
};

//클릭 기록 출력 기록

const UseMemo = () => {
  const [delayNumber, setdelayNumber] = React.useState(0);
  const [notDelayNumber, setnotDelayNumber] = React.useState(0);

  const [clickRec, setClickRec] = React.useState("");
  const [delayclickRec, setDelayClickRec] = React.useState("");

  const memoDelay = React.useMemo(() => {
    return delayCal1(delayNumber);
  }, [delayNumber]);

  const memoNotDelay = notDelayCal1(notDelayNumber);

  return (
    <>
      <h4>using useMemo</h4>
      <button
        onClick={() => {
          setdelayNumber(delayNumber + 1);
          setDelayClickRec(getTime);
        }}
      >
        delay :+1
      </button>

      <button
        onClick={() => {
          setnotDelayNumber(notDelayNumber + 1);
          setClickRec(getTime);
        }}
      >
        not delay :+1
      </button>
      <div>
        <Recording
          clickrecord={delayclickRec}
          printrecord={memoDelay.time}
          category={"useMemo Delay count"}
          count={memoDelay.num}
        />

        <Recording
          clickrecord={clickRec}
          printrecord={memoNotDelay.time}
          category={"useMemo No Delay count"}
          count={memoNotDelay.num}
        />
      </div>
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
