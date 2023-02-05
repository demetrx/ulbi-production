import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    setValue(pv => pv + 1)
  }

  return (
    <div className={classes.btn}>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};