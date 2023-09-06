import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountriesSlice";

const OptionDisplay = () => {
    const currentPotentials = useSelector(selectPotentials);
    console.log(currentPotentials);

    const dispatch = useDispatch()

    return (
        <div className="stack">
            {Array.isArray(currentPotentials) && currentPotentials.map((e, i) => {
                if (e && e.name && e.name.official && e.name.common) {
                    return (
                        <h2 
                            key={e.name.official} 
                            className="country-option"
                            onClick={() => {
                                dispatch(setDisplayCountry(currentPotentials[i]))
                            }}
                        >
                            {e.name.common}
                        </h2>
                    );
                } 
                return null;
            })}
        </div>
    )
};

export default OptionDisplay;
