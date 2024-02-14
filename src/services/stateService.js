import { configureStore, createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ACTIVE_PRICE_BUTTON_ID } from "../components/Head";
import { getDefaultFrom, getDefaultUntil } from "../utils/dates";

const initialDateState = {
  from: getDefaultFrom(),
  until: getDefaultUntil()
}

const initialErrorModalState = {
  errorMessage: null,
}

const initialFeasibleConsumptionTimeslotState = {
  bestUntil: 0,
}

const initialSideBarState = {
  showSideBar: false,
}


const initialState = {
  activePrice: DEFAULT_ACTIVE_PRICE_BUTTON_ID,
  activeHour: 1
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setActivePrice: (state, action) => {
      state.activePrice = action.payload;
    },
    setActiveHour: (state, action) => {
      state.activeHour = action.payload;
    }
  }
});

export const { setActivePrice, setActiveHour } = mainSlice.actions;

const dateSlice = createSlice({
  name: "date",
  initialState: initialDateState,
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setUntil: (state, action) => {
      state.until = action.payload;
    }
  }
});

export const {setFrom, setUntil} = dateSlice.actions;

const errorModalSlice = createSlice({
  name: "errorModalSlice",
  initialState: initialErrorModalState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  }
});

export const {setErrorMessage} = errorModalSlice.actions;

const feasibleConsumptionTimeslotSlice = createSlice({
  name: "feasibleConsumptionTimeslotSlice",
  initialState: initialFeasibleConsumptionTimeslotState,
  reducers: {
    setBestUntil: (state, action) => {
      state.bestUntil = action.payload;
    },
  }
});

export const {setBestUntil} = feasibleConsumptionTimeslotSlice.actions;

const leftSideBarSlice = createSlice({
  name: "leftSideBarSlice",
  initialState: initialSideBarState,
  reducers: {
    openSideBar: (state) => {
      state.showSideBar = true;
    },
    closeSideBar: (state) => {
      state.showSideBar = false;
    },
  }
});

export const {openSideBar, closeSideBar} = leftSideBarSlice.actions;

export const store = configureStore({
  reducer: {
    mainSlice: mainSlice.reducer,
    date: dateSlice.reducer,
    errorModalSlice: errorModalSlice.reducer,
    feasibleConsumptionTimeslotSlice: feasibleConsumptionTimeslotSlice.reducer,
    leftSideBarSlice: leftSideBarSlice.reducer
  },
});

