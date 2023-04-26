import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext({} as IAppContext);

interface IProviderProps {
  children: JSX.Element;
}

const AppProvider: React.FC<IProviderProps> = ({children}) => {
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
