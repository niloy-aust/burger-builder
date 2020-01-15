import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];

const buildControls = (props) => {
    return (
    <div className={classes.BuildControls}>
<p> Currenct Price: <strong>  {props.price.toFixed(2)}</strong></p>
      {controls.map((cntrl) => (
        <BuildControl
          key={cntrl.label}
          label={cntrl.label}
          added={() => props.ingredientAdded(cntrl.type)}
          removed={() => props.ingredientRemoved(cntrl.type)}
          disabledProperty={props.disabledProperties[cntrl.type]}
        />
      ))}
    </div>
  );
};

export default buildControls;
