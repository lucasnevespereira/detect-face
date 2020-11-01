import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="center white f3">
        {`Hello ${name}, your current entry count is #${entries} ..`}
      </div>
    </div>
  );
};

export default Rank;
