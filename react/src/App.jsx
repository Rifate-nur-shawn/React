import "./App.css";

function App() {
  return (
    <>
      {/* <h1> vite + java</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person> */}
      <Student></Student>
    </>
  );
}
//  function Person(){

//    }
// const money=500;
// const person={name:'Sakib', age:30}
// return <h2>name: {person.name} age: {person.age+money}</h2>
//  }

function Student() {
  const personStyle = {
    border: "2px solid red",
    margin: "5px",
    padding: "10px",
    width: "25%"
  }
  
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
  
  return (
    <div style={containerStyle}>
      <div style={personStyle}>
        <h2>Student</h2>
        <h3>name: John</h3>
        <h3>age: 30</h3>
      </div>
      <div style={personStyle}>
        <h2>Student</h2>
        <h3>name: John</h3>
        <h3>age: 30</h3>
      </div>
      <div style={personStyle}>
        <h2>Student</h2>
        <h3>name: John</h3>
        <h3>age: 30</h3>
      </div>
    </div>
  )
}



export default App;
