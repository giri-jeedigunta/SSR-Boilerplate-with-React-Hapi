import React, { useRef } from "react"
import { inject, observer } from "mobx-react"


const TodoListView = ({ store }) => {
  const itemRef = useRef(null);
  return (
    <>
      <div>
        <h1>TODO</h1>
        <p>Total Count: {store.completedCount}</p>
        <input type="text" name="addItem" ref={ itemRef } />

        <button onClick={() => store.addTodo(itemRef.current.value)}>ADD</button>

          <h2>List</h2>
          <ul>
            {store.todos.map(item => <li key={item}>{item}</li>)}
          </ul>
      </div>
    </>
  );
};

export default inject('store')(observer(TodoListView));
