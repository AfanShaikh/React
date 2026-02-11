import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../Reducer/Action";

export const useCounter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset
  };
};
