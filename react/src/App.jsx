import { useState, useEffect } from "react";
import "./App.css";
import BookStore from "./assets/BookStore";
import Lib from "./assets/Lib";
import Add from "./assets/Add";

function App() {
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("darkblue");
  const books = [
    { id: 1, name: "java", price: 100 },
    { id: 2, name: "bangla", price: 300 },
    { id: 3, name: "eng", price: 3300 },
    { id: 4, name: "cpp", price: 400 },
  ];

  useEffect(() => {
    console.log("App component mounted");
    console.log("Books data:", books);
  }, []);

  const changeTheme = () => {
    setTheme(theme === "darkblue" ? "darkgreen" : "darkblue");
  };

  try {
    return (
      <div
        className="app-container"
        style={{ 
          padding: "20px", 
          border: "2px solid black",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <h1 style={{ 
          textAlign: "center", 
          color: theme,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          borderBottom: `2px solid ${theme}`,
          paddingBottom: "10px"
        }}>Book Store Application</h1>
        
        <button 
          onClick={changeTheme}
          style={{
            backgroundColor: theme,
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "15px"
          }}
        >
          Change Theme
        </button>

        {error ? (
          <div style={{ color: "red" }}>Error: {error.message}</div>
        ) : (
          <>
            <BookStore books={books} />
            <Lib themeColor={theme} />
            <Add sal= "ninetyk" />
          </>
        )}
      </div>
    );
  } catch (err) {
    console.error("Rendering error:", err);
    setError(err);
    return (
      <div style={{ color: "red", padding: "20px" }}>
        Something went wrong: {err.message}
      </div>
    );
  }
}

export default App;
