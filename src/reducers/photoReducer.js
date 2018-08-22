import { FETCH_PHOTOS, SET_ACTIVE_PHOTO } from "../actions/types";
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      //   transform the data for the redux store
      const objWithIdAsKey = action.payload.reduce((previous, currentPhoto) => {
        // pull off the id property and use it as a key
        const { id, ...photoNoId } = currentPhoto;
        previous[id] = photoNoId;
        return previous;
      }, {});
      return { photos: objWithIdAsKey, activePhoto: 1 };

    case SET_ACTIVE_PHOTO:
      return { ...state, activePhoto: action.payload };
    default:
      return state;
  }
}
