import React from "react";

const delayCal2 = (num: number): number => {
  for (let i = 0; i < 999999999; i++) {}
  return num + 1;
};
const notDelayCal2 = (num: number): number => {
  return num + 1;
};

const NotUseMemo = () => {
  const [delayNumber2, setDelayNumber2] = React.useState(0);
  const [notDelayNumber2, setnotDelayNumber2] = React.useState(0);

  const useNotMemoDelay = delayCal2(delayNumber2);
  const useNotMemo = notDelayCal2(notDelayNumber2);
  return (
    <>
      <h4>not using useMemo</h4>
      <button
        onClick={() => {
          setDelayNumber2(delayNumber2 + 1);
        }}
      >
        delay :+1
      </button>

      <button
        onClick={() => {
          setnotDelayNumber2(notDelayNumber2 + 1);
        }}
      >
        not delay :+1
      </button>

      <div>1:{useNotMemoDelay}</div>
      <div>2:{useNotMemo}</div>
    </>
  );
};

export default NotUseMemo;
//not delay 해도 딜레이 걸려야함
