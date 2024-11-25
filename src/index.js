import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Guru from "./contex";

// const App = () => {
//   const [count,setcount]=useState(0)
//   return <div>
//         <h4>{count}</h4>
//         <button onClick={()=>{
//           setcount(count+1)
//         }}>Click here</button>
//   </div>;
// };

const App = () => {
//   const [count, setcount] = useState(0);
 
//  useEffect(()=>{
//   async function API(){
//     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//     const OriginalData=await data.json()
//     console.log(OriginalData)
//    }
//    API()
//  },[])
  return (
    <div>
      {/* <h4>{count}</h4>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click here
      </button> */}
      
      <Guru/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
