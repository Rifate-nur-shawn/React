import "./App.css";
import Todo from './assets/Todo';
function App() {
  return (
    <>
      {/* <h1> vite + java</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person> */}
      <Todo task="have to learn and study at the same time" Istrue ={false}></Todo>
      <Student name="shawn" score="99"></Student>
    </>
  );
}

function Student(props) {
  console.log(props);

  const personStyle = {
    border: "2px solid red",
    margin: "5px",
    padding: "10px",
    width: "25%",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  };

  return ( 
    <div style={containerStyle}>
      <div style={personStyle}>
        <h2>Student</h2>
        <h3>name: {props.name}</h3>
        <h3>score: {props.score}</h3>
      </div>
      <div style={personStyle}>
        <h2>Student</h2>
        <h3>name: {props.name}</h3>
        <h3>score: {props.score}</h3>
      </div>
      <div style={personStyle}>
        <h2>Student</h2>
        <h3>name: {props.name}</h3>
        <h3>score: {props.score}</h3>
      </div>
    </div>
  );
}

export default App;
