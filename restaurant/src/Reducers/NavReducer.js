import { HANDLE_NAV } from './actionTypes';

export const navState = {
   isNavOpen: false,
};

const navReducer = (state = navState, action) => {
   switch (action.type) {
      case HANDLE_NAV:
         return { ...state, isNavOpen: !state.isNavOpen };
      default:
         return state;
   };
};

export default navReducer;