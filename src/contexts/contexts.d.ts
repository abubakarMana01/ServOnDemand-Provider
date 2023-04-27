interface IAppContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IAppContext['user']>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<IAppContext['token']>>;
}
