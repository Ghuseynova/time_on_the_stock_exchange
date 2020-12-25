import { GET_CLOCKS, ADD_CLOCK, DELETE_CLOCK, CHANGE_TIMEZONE } from './types';

const getClocks = (clocks) => ({
  type: GET_CLOCKS,
  payload: clocks,
});

const addClock = (clock) => ({
  type: ADD_CLOCK,
  payload: clock,
});

const deleteClock = (clockId) => ({
  type: DELETE_CLOCK,
  payload: clockId,
});

const changeTimezone = (clockId, tz) => {
  return {
    type: CHANGE_TIMEZONE,
    payload: {
      clockId,
      tz,
    },
  };
};

export { getClocks, addClock, deleteClock, changeTimezone };
