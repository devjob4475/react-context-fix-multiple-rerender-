import React, { createContext, useContext, useState } from 'react';
const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
const [data, setData] = useState({ companys:[]});

      console.log("🚀 ~ DataProvider ~ data:", data)
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};