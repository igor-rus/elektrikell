import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ACTIVE_PRICE_BUTTON_ID } from "../components/Head";
import { getDefaultFrom, getDefaultUntil } from "../utils/dates";

const initialState = {
  activePrice: DEFAULT_ACTIVE_PRICE_BUTTON_ID,
  activeHour: 1
}

const initialDateState = {
  from: getDefaultFrom(),
  until: getDefaultUntil()
}

export const setActivePrice = createAction('setActivePrice');
export const setActiveHour = createAction('setActiveHour');

const main = createReducer(initialState, (builder) => {
  builder.addCase(setActivePrice, (state, action) => {
    state.activePrice = action.payload;
  })
    .addCase(setActiveHour, (state, action) => {
      state.activeHour = action.payload;
    })
});

const dateSlice = createSlice({
  name: "date",
  initialState: initialDateState,
  reducers: {
    setFrom: (state, action) => {
      state.from  = action.payload;
    },
    setUntil: (state, action) => {
      state.until  = action.payload;
    }
  }
});

export const {setFrom, setUntil} = dateSlice.actions;

export const store = configureStore({
  reducer: { main, date: dateSlice.reducer },
});

