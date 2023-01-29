import React, { createContext, userContext, useEffect, useState } from "react";

const initSave = {
  save: [],
};

const getInitialState = () => {
  const team = localStorage.getItem("save");
  return team ? JSON(team) : initSave;
};

export const SaveContext = createContext();

const SaveContextProvider = () => {
  const { save, setSave } = useState(getInitialState);
  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(save));
  }, [save]);
  const addMovie = (movie) =>
    setSave((prev) => {
      const newSave = {
        ...prev,
        save: [...prev.save, movie],
      };
      localStorage.setItem("save", JSON.stringify(newSave));
      return newSave;
    });

  const removeMovie = (movieId) =>
    setSave((prev) => ({
      ...prev,
      save: prev.save.filter((p) => p.id !== movieId),
    }));
  return (
    <SaveContext.Provider value={{ addMovie, removeMovie, ...save }}>
      {props.children}
    </SaveContext.Provider>
  );
};

export default SaveContext;
