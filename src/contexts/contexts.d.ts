interface IAppContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IAppContext['user']>>;
}
