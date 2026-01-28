import axios from "axios";
import { fetchStart, fetchSuccess, fetchError } from "../Redux/Action";

const API_URL = "https://fakestoreapi.com/products";

export const Fetch_Api = (dispatch) => {
  dispatch(fetchStart());

  axios
    .get(API_URL)
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchError(error.message));
    });
};