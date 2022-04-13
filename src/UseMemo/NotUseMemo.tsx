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
const delayCal2 = (num: number): funcType => {
  for (let i = 0; i < 999999999; i++) {}
  const time = getTime();
  const object = {
    num: num + 1,
    time,
  };

  return object;
};

const notDelayCal2 = (num: number): funcType => {
  const time = getTime();
  const object = {
    num: num + 1,
    time,
  };

  return object;
};

const NotUseMemo = () => {
  const [delayNumber2, setDelayNumber2] = React.useState(0);
  const [notDelayNumber2, setNotDelayNumber2] = React.useState(0);

  const [clickRec, setClickRec] = React.useState("");

  const [delayclickRec, setDelayClickRec] = React.useState("");

  const useNotMemoDelay = delayCal2(delayNumber2);
  const useNotMemo = notDelayCal2(notDelayNumber2);

  return (
    <>
      <h4>not using useMemo</h4>
      <button
        onClick={() => {
          setDelayNumber2(delayNumber2 + 1);
          setDelayClickRec(getTime);
        }}
      >
        delay :+1
      </button>

      <button
        onClick={() => {
          setNotDelayNumber2(notDelayNumber2 + 1);
          setClickRec(getTime);
        }}
      >
        not delay :+1
      </button>
      <div>
        <Recording
          clickrecord={delayclickRec}
          printrecord={useNotMemoDelay.time}
          category={"Not useMemo Delay count"}
          count={useNotMemoDelay.num}
        />

        <Recording
          clickrecord={clickRec}
          printrecord={useNotMemo.time}
          category={"Not useMemo No Delay count"}
          count={useNotMemo.num}
        />
      </div>
    </>
  );
};

export default NotUseMemo;
//not delay 해도 딜레이 걸려야함
/* useNotMemoDelay
useNotMemo */
