import React, { createContext, useReducer, ReactNode, useEffect } from "react";
import { AppReducer } from "./AppReducer";
import { ChildComponents, objectTask } from "../Interfaces/Interfaces";
import Task from "../components/Task/Task";

const loadData = localStorage.getItem("Tasks");
const initialList: objectTask[] = loadData ? JSON.parse(loadData) : [];

const GlobalContext = createContext<any>({});

const GlobalProvider = ({ children }: ChildComponents) => {
  const [data, dispatch] = useReducer(AppReducer, initialList);

  const addTask = (task: objectTask) => {
    dispatch({ type: "ADD_TASK", task });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", id });
  };

  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", id });
  };

  useEffect(() => {
    localStorage.getItem("Task");
    localStorage.setItem("Tasks", JSON.stringify(data));
  }, [data]);

  return (
    <GlobalContext.Provider value={{ data, addTask, deleteTask, toggleTask }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
