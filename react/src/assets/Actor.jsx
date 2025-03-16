// export default function Actor({ Cname, Maincast}){
//     console.log(Cname);
//     const Actorstyle = {
//         padding: '10px',
//         margin: '5px',
//         border: '1px solid red',
//         borderRadius: '5px'
//     };
//     return (
//         <div style={Actorstyle}>
//             {Maincast ? 
//                 <h1>{Cname} is a main cast {Maincast}</h1> : 
//                 <h1>{Cname} is not a main cast, {Maincast}</h1>
//             }
//         </div>
//     );
// }
export default function Actor({name}){
    return(
        <li> Name: {name}</li>
    )
}