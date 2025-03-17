import { useState, useEffect } from "react";
import "./App.css";
import BookStore from "./assets/BookStore";

function App() {
  const [error, setError] = useState(null);
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

  try {
    return (
      <div
        className="app-container"
        style={{ padding: "20px", border: "2px solid black" }}
      >
        <h1>Book Store Application</h1>
        {error ? (
          <div style={{ color: "red" }}>Error: {error.message}</div>
        ) : (
          <BookStore books={books} />
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
