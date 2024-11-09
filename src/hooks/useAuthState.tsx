import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/features/authSlice";

const useAuthState = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const isAuthenticated = !!token;

  const handleLogOut = () => {
    dispatch(logout());
  };

  return {
    user,
    token,
    isAuthenticated,
    logOut: handleLogOut,
  };
};

export default useAuthState;
