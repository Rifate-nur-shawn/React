import React from "react";

function Lib({ themeColor = "darkblue" }) {
  const libStyle = {
    backgroundColor: themeColor,
    color: "white",
    padding: "15px",
    borderRadius: "8px",
    margin: "20px 0",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  return (
    <div style={libStyle}>
      <h2>Library Services</h2>

      <div style={{ marginTop: "15px" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ padding: "8px 0" }}>📚 Book Borrowing</li>
          <li style={{ padding: "8px 0" }}>🔍 Book Search</li>
          <li style={{ padding: "8px 0" }}>📅 Reservation System</li>
          <li style={{ padding: "8px 0" }}>💬 Reading Recommendations</li>
        </ul>
      </div>
    </div>
  );
}

export default Lib;
