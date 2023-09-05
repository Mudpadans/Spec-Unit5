import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";

const store = configureStore({
    reducer: { potentialCountries: potentialCountriesReducer },
})

console.log(store.getState().potentialCountries.value.name);

export default store;