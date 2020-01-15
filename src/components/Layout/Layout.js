import React from "react";
import Classes from './Layout.module.css';
import Auxiliary from "../../hoc/Auxiliary";
import BurgerBuilder from './../../containers/BurgerBuilder/BurgerBuilder';
const layout = (props) => (
  <Auxiliary>
    {/* <div>Toolbar, SideDrawer,BackDrop</div> */}
    <main className={Classes.Content}>{props.children} </main>
    <BurgerBuilder />
  </Auxiliary>
);

export default layout;