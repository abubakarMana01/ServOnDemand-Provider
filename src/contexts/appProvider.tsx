import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext({} as IAppContext);

interface IProviderProps {
  children: JSX.Element;
}

const AppProvider: React.FC<IProviderProps> = ({children}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{user, setUser, token, setToken}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
