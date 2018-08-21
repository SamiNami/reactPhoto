import axios from "axios";
import { FETCH_PHOTOS } from "./types";

export const fetchPhotos = () => async dispatch => {
  const res = await axios.get(
    "http://jsonplaceholder.typicode.com/photos/?_limit=15"
  );
  dispatch({ type: FETCH_PHOTOS, payload: res.data });
};
