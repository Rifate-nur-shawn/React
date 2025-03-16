// export default function App(){
//     return (
//         <>
//         <h3>Learn react </h3>
//         <li>i am shawn</li>

//         </>
//     )
// }
// conditional rendering
export default function Todo({task , Istrue}){
    if(Istrue){
        return <li> finaly kaj sesh : {task}</li>
    }
    return <li> i want to start it now and: i {task}</li>
}