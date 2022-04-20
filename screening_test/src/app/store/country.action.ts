import { createAction, props } from "@ngrx/store";
import { Country } from "../model/country";

export const clearCountry = createAction('Clear Countries');
export const saveCountyData = createAction('Save Countries', props<Country>());