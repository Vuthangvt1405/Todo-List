import React, { useContext, useState } from "react";
import icon from "../../assets/images/icon.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import { objectTask } from "../../Interfaces/Interfaces";

const Header = () => {
  let { data, addTask } = useContext<any>(GlobalContext);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue) {
      addTask({
        id: Math.floor(Math.random() * 1000 + 1),
        name: inputValue,
        checked: false,
      });
    }
  };

  return (
    <div>
      <div className="flex pb-4">
        <h1 className="text-4xl font-bold text-[#002765] pr-3">To-Do List</h1>
        <img src={icon} className="w-12 h-12" />
      </div>
      <div className="rounded-full bg-slate-400">
        <input
          onChange={handleInput}
          value={inputValue}
          type="text"
          className="w-auto p-2 px-20 rounded-full outline-none bg-slate-400"
        />
        <button
          onClick={handleSubmit}
          className="p-4 bg-orange-400 rounded-full"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Header;
