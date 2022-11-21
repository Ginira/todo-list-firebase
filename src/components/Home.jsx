import { Button, Input } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import TaskList from "./TaskList";

const Home = () => {
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

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(el) => setTitle(el.target.value)}
        me="3%"
        mr="1%"
        width="20%"
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
      <input
        type="file"
        onChange={(el) => setSelectedFile(el.target.files[0].name)}
      />
      <Button type="submit" width="5%" ml="1%" colorScheme="blue">
        Add
      </Button>
      <TaskList />
    </form>
  );
};

export default Home;
