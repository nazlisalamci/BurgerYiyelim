import { useState, createContext } from "react";
import React from "react";
import axios from "axios";

  const BurgerContext = createContext();

  function Provider({ children }) {
    const [burgers, setBurgers] = useState([]);

    const getBurgers = async () => {
    await  axios.get(" http://localhost:3000/burgers").then((res) => {
        setBurgers(res.data);
      });
    };

    
  const sharedMethondsAndValues = {
    getBurgers,
    burgers
  };

  return (
    <BurgerContext.Provider value={sharedMethondsAndValues}>
      {children}
    </BurgerContext.Provider>
  );
  }

export {Provider};
export default BurgerContext;
