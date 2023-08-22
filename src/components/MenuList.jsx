import React, { useEffect, useContext } from "react";
import BurgerContext from "../context/burger";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const {burgers} = useContext(BurgerContext);

  return(<div className="menu">
    <h1 className="menuTitle">Burgerlerimiz</h1>
    <div className="menuList"> {
        burgers.map((burger, index)=>{
           return <MenuItem  key={index} burger={burger}/>
        })
    }</div>
   
  </div>) ;
};

export default MenuList;
