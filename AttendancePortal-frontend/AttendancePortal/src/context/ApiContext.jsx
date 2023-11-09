import { createContext, useContext } from 'react';

const ApiContext = createContext();

const api = 'http://127.0.0.1:8000'; 

export const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};
export default ApiContext; 