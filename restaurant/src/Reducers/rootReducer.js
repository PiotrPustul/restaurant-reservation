import combineReducers from 'react-combine-reducers';

import inputReducer, { inputsState } from '../Reducers/InputReducer';
import detailsReducer, { detailsState } from '../Reducers/DetailsReducer';
import navReducer, { navState } from '../Reducers/NavReducer';

export const [rootReducer, initialState] = combineReducers({
   details: [detailsReducer, detailsState],
   inputs: [inputReducer, inputsState],
   nav: [navReducer, navState]
});