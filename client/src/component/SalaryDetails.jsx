import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { saveDetails } from "../service/api";

import TaxShow from "./TaxShow";

const initialState = {
  Bas: "",
  LTA: "",
  HRA: "",
  FA: "",
  Inv: "",
  Rent: "",
  Med: "",
  AppHRA: "",
  metro: "false",
};
const SalaryDetails = () => {
  const [data, setData] = useState(initialState);
  const [show, setShow] = useState(false);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const calculate = async (e) => {
    e.preventDefault();
    let num = 0;
    if (data.metro === "true") {
      num =
        0.5 * parseInt(data.Bas) +
        0.1 * parseInt(data.Bas) +
        parseInt(data.HRA);
    }
    if (data.metro === "false") {
      num =
        0.4 * parseInt(data.Bas) +
        0.1 * parseInt(data.Bas) +
        parseInt(data.HRA);
    }
    console.log(num);
    data.AppHRA = num.toString();
    if (
      window.confirm(
        "Are you sure you want to save this thing into the database?"
      )
    ) {
      await saveDetails(data);
      console.log("Thing was saved to the database.");
      setShow(true);
    } else {
      console.log("Thing was not saved to the database.");
    }
  };

  return (
    <>
      {show && <TaxShow data={data} />}
      {!show && (
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "40vw",
              height: "80vh",
              marginTop: "20px",
            }}
          >
            <h3>Salary Details</h3>
            <TextField
              required
              type="number"
              className="mt-3"
              fullWidth
              name="Bas"
              value={data.Bas}
              onChange={handleInput}
              size="small"
              label="Basic"
              variant="outlined"
              style={{ marginTop: "10px" }}
            />
            <TextField
              required
              type="number"
              className="mt-3"
              fullWidth
              name="LTA"
              value={data.LTA}
              onChange={handleInput}
              size="small"
              label="LTA"
              variant="outlined"
              style={{ marginTop: "10px" }}
            />
            <TextField
              required
              type="number"
              className="mt-3"
              fullWidth
              name="HRA"
              value={data.HRA}
              onChange={handleInput}
              size="small"
              label="HRA"
              variant="outlined"
              style={{ marginTop: "10px" }}
            />
            <TextField
              required
              type="number"
              className="mt-3"
              fullWidth
              name="FA"
              value={data.FA}
              onChange={handleInput}
              size="small"
              label="FA"
              variant="outlined"
              style={{ marginTop: "10px" }}
            />
            <TextField
              required
              type="number"
              className="mt-3"
              fullWidth
              name="Inv"
              value={data.Inv}
              onChange={handleInput}
              size="small"
              label="Inv"
              variant="outlined"
              style={{ marginTop: "10px" }}
            />
            <TextField
              required
              type="number"
              className="mt-3"
              fullWidth
              name="Rent"
              value={data.Rent}
              onChange={handleInput}
              size="small"
              label="Rent"
              variant="outlined"
              style={{ marginTop: "10px" }}
            />
            <TextField
              required
              type="number"
              className="mt-3"
              fullWidth
              name="Med"
              value={data.Med}
              onChange={handleInput}
              size="small"
              label="Med"
              variant="outlined"
              variant="outlined"
              style={{ marginTop: "10px" }}
            />
            <div style={{ marginTop: "10px" }}>
              <span style={{ fontWeight: "500" }}>Metro City</span>
              <input
                type="radio"
                checked={data.metro === "true"}
                value="true"
                onChange={(e) => {
                  setData({ ...data, metro: e.target.value });
                }}
                id="yes"
              />
              <label htmlFor="yes">Yes</label>

              <input
                type="radio"
                checked={data.metro === "false"}
                value="false"
                onChange={(e) => {
                  setData({ ...data, metro: e.target.value });
                }}
                id="no"
              />
              <label htmlFor="no">No</label>
            </div>
            <Button
              style={{ marginTop: "15px" }}
              variant="contained"
              color="primary"
              fullWidth
              onClick={calculate}
            >
              Calculate
            </Button>
          </div>
        </Container>
      )}
    </>
  );
};

export default SalaryDetails;
