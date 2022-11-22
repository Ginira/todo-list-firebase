import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import TaskTraking from "./TaskTraking";

const TaskList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const queryDB = query(collection(db, "todos"));
    const unsub = onSnapshot(queryDB, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);
  // изменям имя задачи в Firestore Database
  const editTask = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const dateEnd = async (todo, endDate) => {
    await updateDoc(doc(db, "todos", todo.id), { endDate: endDate });
  };

  const completedTask = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  // когда мы изменили(перезаписали) состояние происходит рендер страницы и компонент TaskList снова мапится
  return (
    <div>
      {todos.map((task) => {
        return (
          <TaskTraking
            key={task.id}
            task={task}
            editTask={editTask}
            completedTask={completedTask}
            deleteTask={deleteTask}
            dateEnd={dateEnd}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
