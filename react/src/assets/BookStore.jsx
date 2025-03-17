import React from "react";

export default function BookStore({ books }) {
  console.log("BookStore rendering with books:", books);

  // Add defensive check
  if (!books || books.length === 0) {
    return <div>No books available</div>;
  }

  return (
    <div
      className="bookstore"
      style={{ padding: "15px", margin: "10px", border: "1px solid #ccc" }}
    >
      <h2 style={{ color: "blue" }}>Book Store</h2>
      <div className="book-list">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-item"
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #eee",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{book.name}</h3>
            <p>Price: ${book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


