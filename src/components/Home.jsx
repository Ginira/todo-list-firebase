import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../firebase";
import TaskList from "./TaskList";

const Home = () => {
  const filePicker = useRef(null);
  const [title, setTitle] = useState(""); // состояние для имени задачи
  const [endDate, setEndDate] = useState(""); // состояние для даты
  const [selectedFile, setSelectedFile] = useState(""); // состояние для файла

  // записываем в Firestore Database данные из input
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && endDate !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        endDate,
        selectedFile,
        completed: false,
      });
      setTitle("");
    }
  };
  // через хук Ref обратили к input с типом файл и ф-ей handlePick навешанной на butto,
  // по методу click воспроизводим клик на другой элемент, т.е. input
  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main-form">
        <h1>All Tasks</h1>
        <input
          type="text"
          value={title}
          onChange={(el) => setTitle(el.target.value)}
          placeholder="Name the task"
        />
        <input
          type="text"
          name="date_target"
          placeholder="DD-MM-YYYY HH:MM"
          pattern="(^([1-9]|([012][0-9])|(3[01]))-([0]{0,1}[1-9]|1[012])-\d\d\d\d [012]{0,1}[0-9]:[0-6][0-9]$)"
          value={endDate}
          onChange={(el) => setEndDate(el.target.value)}
        />
        <button onClick={handlePick}>Add file</button>
        <input
          className="hidden"
          type="file"
          ref={filePicker}
          onChange={(el) => setSelectedFile(el.target.files[0].name)}
        />
        <button type="submit">Add</button>
      </div>
      <TaskList />
    </form>
  );
};

export default Home;
