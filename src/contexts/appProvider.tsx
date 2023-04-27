import LoaderView from '@/components/loaderView';
import {useAuthToken} from '@/hooks';
import {getWorkerInfo} from '@/utils/apiRequests';
import React, {createContext, useContext, useEffect, useState} from 'react';

const AppContext = createContext({} as IAppContext);

interface IProviderProps {
  children: JSX.Element;
}

const AppProvider: React.FC<IProviderProps> = ({children}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const {getToken} = useAuthToken();
  const [isLoading, setIsLoading] = useState(true);

  async function persistAuthState() {
    const savedToken = await getToken();
    setToken(savedToken!);
    if (!savedToken) {
      return setIsLoading(false);
    }

    try {
      const {data} = await getWorkerInfo(savedToken);
      setUser(data);
    } catch (ex) {
      console.log(ex);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    persistAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <LoaderView />;
  }

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
