import { GET_CLOCKS, ADD_CLOCK, DELETE_CLOCK, CHANGE_TIMEZONE } from './types';

const initialState = { clocks: [] };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLOCKS:
      return { clocks: [...action.payload] };

    case ADD_CLOCK:
      return { clocks: [...state.clocks, action.payload] };

    case DELETE_CLOCK:
      return {
        clocks: state.clocks.filter((clock) => clock.id !== action.payload),
      };

    case CHANGE_TIMEZONE:
      return {
        clocks: state.clocks.map((clock) => {
          if (clock.id !== action.payload.clockId) {
            return clock;
          }

          return {
            ...clock,
            timezone: action.payload.tz,
          };
        }),
      };

    default:
      return state;
  }
};

export default appReducer;
