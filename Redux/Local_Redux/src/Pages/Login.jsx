import { LoginCompo } from '../Components/Login';
import { useDispatch, useSelector } from "react-redux";

import { loginSuccessfull, loginFailure  } from "../Reducer/Auth/Action";


export const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.auths)

const handleLogin=({email,pass})=>{
    // if (email === 'admin' && pass === 'admin@1234') {
    //   dispatch(loginSuccessfull('Fake-Token'));
    // } else {
    //   dispatch(loginFailure('Wrong Crendentails'));
    // }
    if (email === 'admin' && pass === 'admin@1234') {
      dispatch(loginSuccessfull('Fake-Token'));
    } else {
      dispatch(loginFailure('Wrong Crendentails'));
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