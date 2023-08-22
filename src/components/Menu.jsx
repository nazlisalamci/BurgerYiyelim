import React, { useEffect, useContext } from "react";
import BurgerContext from "../context/burger";
import MenuList from "./MenuList";

const Menu = () => {
  const context = useContext(BurgerContext);

  useEffect(() => {
    context.getBurgers();
  }, []);

  return <div>
    <MenuList/>
  </div>;
};

export default Menu;
