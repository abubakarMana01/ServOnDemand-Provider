interface IAppContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IAppContext['user']>>;
}
