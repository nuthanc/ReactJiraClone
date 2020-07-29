  import { SIGN_IN, SIGN_OUT } from '../actions/types';


const INITIAL_STATE = {
  isSignedIn: null,
  id: null,
  name: null,
};

export default (state = INITIAL_STATE, action) => {
  // console.log("In authReducer")
  // console.log(action);
  switch (action.type) {
    case SIGN_IN:
      // console.log("Before destructure");
      // console.log(action.payload);
      const { id, name } = action.payload;
      return { ...state, isSignedIn: true, id, name };
    case SIGN_OUT:
      return {...state, isSignedIn:false, id: null, name: null};
    default:
      return state;
  }
};
