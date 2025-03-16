import "./App.css";
import Todo from './assets/Todo';
import Actor from "./assets/Actor";
import Singer from "./assets/Singer";

function App() {
  const actors =['chris','scarlet','chris','mark']

  const singers =[ 
    {name: 'shawn', age: 25}, 
    {name: 'justin', age: 30},
    {name: 'sakira', age: 35}]

   return( <>
      {/* <h1> vite + java</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person> */}
      {/* <Todo task="have to learn and study at the same time" Istrue ={false}></Todo>
      <Student name="shawn" score="99"></Student> */}
   
      <Actor name =  {"rdj "}></Actor>
        {
          actors.map(actor => <Actor name = {actor}></Actor>)
        }
        <Singer name ={'sakira'} age ={30} > </Singer>
        {
        singers.map((singer, index) => <Singer key={index} name={singer.name} age={singer.age}></Singer>)
        }
      
    </>
  );
}

// function Student(props) {
//   console.log(props);

//   const personStyle = {
//     border: "2px solid red",
//     margin: "5px",
//     padding: "10px",
//     width: "25%",
//   };

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//   };

//   return ( 
//     <div style={containerStyle}>
//       <div style={personStyle}>
//         <h2>Student</h2>
//         <h3>name: {props.name}</h3>
//         <h3>score: {props.score}</h3>
//       </div>
//       <div style={personStyle}>
//         <h2>Student</h2>
//         <h3>name: {props.name}</h3>
//         <h3>score: {props.score}</h3>
//       </div>
//       <div style={personStyle}>
//         <h2>Student</h2>
//         <h3>name: {props.name}</h3>
//         <h3>score: {props.score}</h3>
//       </div>
//     </div>
//   );
//   // function Actor(props){ 
//   //   console.log(props);
//   //     const Actorstyle = {
//   //     border: "2px solid red",
//   //     margin: "5px",
//   //     padding: "10px",
//   //     }
    
//   // }
// }

export default App;
