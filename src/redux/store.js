import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import displayCountryReducer from "../redux/slices/displayCountriesSlice";

const store = configureStore({
    reducer: { 
        potentialCountries: potentialCountriesReducer,
        displayCountry: displayCountryReducer
    }

})

export default store;