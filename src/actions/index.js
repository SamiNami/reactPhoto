import axios from "axios";
import { FETCH_PHOTOS, SET_ACTIVE_PHOTO } from "./types";

export const fetchPhotos = () => async dispatch => {
  const res = await axios.get(
    "http://jsonplaceholder.typicode.com/photos/?_limit=15"
  );
  dispatch({ type: FETCH_PHOTOS, payload: res.data });
};

export const setActivePhoto = id => dispatch => {
  console.log(id);
  dispatch({ type: SET_ACTIVE_PHOTO, payload: id });
};
