// import {React, useState} from "react";
import styles from "./noteList.module.css"

import { useState } from "react";

function NoteListComponent({notes, onDeleteNote}) {
  
  const [viewItem, setViewItem] = useState([]);

  const toggleExpandedItem = (index) => {
    // console.log("toggle click "+ ( index))

    if (viewItem.includes(index)) {
      let updatedViewItems = viewItem.filter(item => item !== index);
      setViewItem(updatedViewItems);
      return;
    } 
    setViewItem([...viewItem, index]);

  }



  return (
    <div className={styles.mainContainer}>
      <h3>Note list</h3>
      {
        notes.length > 0 ?
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((item, index) => {
              return (
                <>
                <tr key={index}>
                  <td className="text-left">{item.title}</td>
                  <td className="btn">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm "
                      onClick={ () => {
                        toggleExpandedItem(index)
                      }}
                    >
                      {viewItem.includes(index) ? <span>&#8896;</span> : <span>&#9013;</span> }
                   
                    </button>
                    <button type="button" className="btn btn-info btn-sm m-1">
                      Edit
                    </button>
                    <button
                      type="button"
                      id={`delete-btn-${index}`}
                      className="btn btn-danger btn-sm "
                      onClick={()=>onDeleteNote(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <div className={`${styles.noteExpand} ${viewItem.includes(index) ? styles.noteExpanded : ""}`}>{item.body}</div>
                </>
              );
            })}
          </tbody>
        </table>
        :
        <p>Note notes available</p>
      }
    </div>
  );
}

export default NoteListComponent;

