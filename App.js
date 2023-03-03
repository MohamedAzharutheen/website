// import React, { useState } from 'react'
// import Child from './web/child'
// import Paren from './web/paren'
// import Login from './web/login'
// import Signup from './web/signup'
// import Reg from './web/reg'
import Fetchadata from "./website.jsx/fetchadata";
import Asyns from "./website.jsx/asyns";
import SearchData from "./website.jsx/search data";
import Header from "./website.jsx/header";
import CurrentDate from "./website.jsx/currentdate";
import TodoList from "./todo/TodoList";
import InputArea from "./component/InputArea";
import { useState } from "react";
import TodoItems from "./component/TodoItems";
import Index from "./nav/Index";
import Home from "./nav/Home";
import Contact from "./nav/Contact"
import About from "./nav/About"
import Login from "./nav/Login"
import { Routes,Route,Link } from "react-router-dom";
import Todo from './nav/Todo'
import OurService from "./nav/OurService";


function App() {
//   const [items, setItems] = useState([]);


 

//   const addItems = (inputText) => {
//     setItems((prevItems) => {
//       return [...prevItems, inputText];
//     });
//   };

//   // console.log("items",items)

// //// Delete array in items filter method

//   const deleteItems = (id) => {
//     // setItems((prevItems) => {
//     //   return prevItems.filter((item, index) => {
//     //     console.log(item)
//     //     return index !== id;
//     //   });
//     // });

// /// Delete array in items splice method

//     const removeArr = [...items];
//     removeArr.splice(id,1);
//     setItems(removeArr);
//   };


// /// slice method to delete array

//   //   setItems([
//   //     ...items.slice(0, id),
//   //     ...items.slice(id + 1, items.length)
//   //   ]);
//   // }



//   return (
//     <div className="h-screen p-5 bg-blue-400">
//       <div className="h-auto p-5 mx-auto bg-orange-300 border border-black rounded shadow mt-14 w-96">
//         <h1 className="font-bold text-center">To-Do List</h1>
//         <div>
//           <InputArea addItems={addItems} />
//           <div></div>
//           <ul className="">
//             {items.map((items, index) => {
//               return (
//                 <TodoItems
//                   key={index}
//                   text={items}
//                   deleteitem={deleteItems}
//                   id={index}
               
//                 />
//               );
//             })}
//           </ul>
//         </div>
//       </div>
  //   </div>
  // );

return(
<div>
 
  <Routes>
  {/* <Index/> */}
  
    <Route path="/" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="Todo" element={<Todo/>}/>
    <Route path="OurService"element={<OurService/>}/>
    <Route path="Login" element={<Login/>}/>
  </Routes>
</div>
)

}

export default App;

{
  /* <p>{name}</p> 
     <Paren  name={name}/>  
     <Child getValue={getValue}/> */
}

//const[name,setName]=useState("")

// const getValue=(a)=>{
// setName(a)

// }
