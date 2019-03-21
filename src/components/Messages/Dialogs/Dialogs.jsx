import React from 'react';
import styles from "./Dialogs.module.css";
import Dialog from "./DIalog/Dialog";

let compList = [
  {id: 1, name: 'Max'},
  {id: 2, name: 'Fredd'},
  {id: 3, name: 'Dimych'},
  {id: 4, name: 'Helen'},
  {id: 5, name: 'Smith'}
];

const Dialogs = () => {
  let compElements = compList.map(item =>
    <Dialog id={item.id} name={item.name}/>
  );
  return (
    <div className={styles.companions}>
      {compElements}
    </div>
  );
};
export default Dialogs;