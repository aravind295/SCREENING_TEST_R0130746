import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Country } from "../model/country";

export const selectCountries = createSelector(
    createFeatureSelector('countriesData'),
    (state: Country[]) => {
        return state;
    }
)
