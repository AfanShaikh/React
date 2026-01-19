import { LoginCompo } from '../Components/Login';
import { useDispatch, useSelector } from "react-redux";

import * as types from "../Reducer/Auth/Action";


export const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.auths)

const handleLogin=({email,pass})=>{
    if (email === 'admin' && pass === 'admin@1234') {
      dispatch({ type: types.LOGIN_SUCCESSFULL, payload: 'fakeToken' });
    } else {
      dispatch({ type: types.LOGIN_FAILURE, payload: 'wrong credantials' });
    }
}

  if (isLoading) return <h1>loading....</h1>

  return (
    <>
      <LoginCompo props={handleLogin} />
      {isError && <h1>something went wrong..... </h1>}
    </>
  );
};