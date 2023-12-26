import React from "react";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <div style={{
      padding:"0px",
      margin:"0px",
    }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "left",
          padding: "0.5%", // Decrease the padding
          backgroundColor: "#5FBDFF", // Set background color
          color: "white", // Set text color
        }}
      >
        <Link to="/" style={{ marginRight: "2%", textDecoration: "none", color: "white", padding: "1.5% 2%" }}>
          <h3>Home</h3>
        </Link>
        <Link to="/signin" style={{ marginRight: "15px", textDecoration: "none", color: "white", padding: "1.5% 2%" }}>
          <h3>Sign in</h3>
        </Link>
        <Link to="/signup" style={{ marginRight: "15px", textDecoration: "none", color: "white", padding: "1.5% 2%" }}>
          <h3>Sign up</h3>
        </Link>
      </nav>
    </div>
  );
}

export default ResponsiveAppBar;

