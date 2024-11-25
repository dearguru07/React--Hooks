import React, { createContext } from "react";
import { ContexData } from "./contex";
import { useContext } from "react";

const Charan=()=>{
    const data=createContext(ContexData)
    return <div>
        <h4>Namastee too all {data}</h4>
    </div>
}
export default Charan;