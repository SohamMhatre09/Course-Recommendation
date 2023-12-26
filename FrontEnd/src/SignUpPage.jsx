import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SignUpPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginTop: "8%",
          fontFamily: "Gill Sans, sans-serif",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          width: "30%",
        }}
      >
        <br />
        <div>
          <h1>Sign Up</h1>
        </div>
        <div>
          Learn on your own time <br />
          From top universities and businesses.
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "300px" }}>
            <div style={{ display: "flex", justifyContent: "left" }}>
              <b>Email</b>
            </div>
            <TextField
              id="email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "300px" }}>
            <b style={{ display: "flex", justifyContent: "left" }}>Password</b>
            <TextField
              id="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
        </div>
        <br />
        <br />
        <Button variant="outlined" color="primary">
          Join for free !!
        </Button>
        <br />
        <br />
      </div>
    </div>
  );
}

export default SignUpPage;
