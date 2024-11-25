import React, { createContext } from "react";
import Charan from "./charan";
import { useContext } from "react";

 export const ContexData = createContext();
const Guru = () => {
  const data = "Hello world";
  return (
    <div>
      <ContexData.Provider value={data}>
        <Charan />
      </ContexData.Provider>
    </div>
  );
};
export default Guru;
