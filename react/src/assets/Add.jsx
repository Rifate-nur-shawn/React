export default function Add() {  return (
    <div style={{ padding: "20px", border: "2px solid black", backgroundColor: "#f5f5f5", borderRadius: "10px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: theme, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", borderBottom: `2px solid ${theme}`, paddingBottom: "10px" }}>Book Store Application</h1>
      <button onClick={changeTheme} style={{ backgroundColor: theme, color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer", marginBottom: "15px" }}>Change Theme</button>
      {error ? (
        <div style={{ color: "red" }}>Error: {error.message}</div>
      ) : (
        <>
          <BookStore books={books} />
          <Lib themeColor={theme} />
        </>
      )}
    </div>
  );
}