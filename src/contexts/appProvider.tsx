import React, {createContext, useContext} from 'react';

const AppContext = createContext({});

interface IProviderProps {
  children: JSX.Element;
}

const AppProvider: React.FC<IProviderProps> = ({children}) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
