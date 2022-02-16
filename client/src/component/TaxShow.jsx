import React, { useState, useEffect } from "react";

const TaxShow = ({ data }) => {
  console.log(data);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    let num = 0;
    num =
      parseInt(data.Bas) +
      parseInt(data.LTA) +
      parseInt(data.HRA) +
      parseInt(data.FA);

    num = num - parseInt(data.AppHRA) - parseInt(data.Inv) - parseInt(data.Med);

    setAmount(num);
  }, []);
  return (
    <div style={{ marginTop: "30px", marginLeft: "100px" }}>
      <span style={{ fontSize: "24px", fontWeight: "bold" }}>
        Taxable Income
      </span>
      <span
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "blue",
          marginLeft: "10px",
        }}
      >
        {amount}
      </span>
    </div>
  );
};

export default TaxShow;
