import { NAME_INPUT, EMAIL_INPUT, PHONE_INPUT, NAME_ERROR, EMAIL_ERROR, PHONE_ERROR, RESET_STATE } from './actionTypes';

export const inputsState = {
   enteredName: '',
   enteredEmail: '',
   enteredPhone: '',
   errorName: null,
   errorEmail: null,
   errorPhone: null,
};

const inputReducer = (state = inputsState, action) => {
   switch (action.type) {
      case NAME_INPUT:
         return { ...state, enteredName: action.value };
      case EMAIL_INPUT:
         return { ...state, enteredEmail: action.value };
      case PHONE_INPUT:
         return { ...state, enteredPhone: action.value };
      case NAME_ERROR:
         return { ...state, errorName: action.error };
      case EMAIL_ERROR:
         return { ...state, errorEmail: action.error };
      case PHONE_ERROR:
         return { ...state, errorPhone: action.error };
      case RESET_STATE:
         return inputsState;
      default:
         return state;
   }
};

export default inputReducer;