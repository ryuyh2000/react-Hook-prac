import React from "react";

interface recordingProps {
  clickrecord: string;
  printrecord: string;
  category: string;
  count: number;
}

const Recording: React.FC<recordingProps> = ({
  count,
  clickrecord,
  printrecord,
  category,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <p>
        {category} : {count}
      </p>
      <p style={{ marginLeft: "100px" }}>Click Record : {clickrecord}</p>
      <p style={{ marginLeft: "100px" }}>Print Record : {printrecord}</p>
    </div>
  );
};

export default Recording;
