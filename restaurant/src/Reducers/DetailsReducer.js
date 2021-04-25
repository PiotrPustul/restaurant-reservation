import {
   INCREASE_TIME, DECREASE_TIME,
   INCREASE_COVERS, DECREASE_COVERS,
   INCREASE_DURATION, DECREASE_DURATION,
   SELECT_TABLE,
   HANDLE_CALENDAR,
   CONFIRM_BOOKING,
   RESET_STATE
} from './actionTypes';

export const detailsState = {
   showCalendar: false,
   timeHours: 12,
   timeMinutes: 0,
   covers: 1,
   durationHours: 1,
   durationMinutes: 0,
   tableNr: null,
   confirmBooking: false,
};

const detailsReducer = (state = detailsState, action) => {
   switch (action.type) {
      case INCREASE_TIME:
         return { ...state, timeHours: action.payload.hour, timeMinutes: action.payload.minutes };
      case DECREASE_TIME:
         return { ...state, timeHours: action.payload.hour, timeMinutes: action.payload.minutes };
      case INCREASE_COVERS:
         return { ...state, covers: state.covers + 1 };
      case DECREASE_COVERS:
         return { ...state, covers: state.covers - 1 };
      case INCREASE_DURATION:
         return { ...state, durationHours: action.payload.hour, durationMinutes: action.payload.minutes };
      case DECREASE_DURATION:
         return { ...state, durationHours: action.payload.hour, durationMinutes: action.payload.minutes };
      case SELECT_TABLE:
         return { ...state, tableNr: state.tableNr === action.tableNr ? null : action.tableNr };
      case HANDLE_CALENDAR:
         return { ...state, showCalendar: !state.showCalendar };
      case CONFIRM_BOOKING:
         return { ...state, confirmBooking: action.confirm }
      case RESET_STATE:
         return detailsState;
      default:
         return state;
   }
};

export default detailsReducer;
