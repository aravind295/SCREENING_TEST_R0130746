import { createReducer, on } from "@ngrx/store";
import { Country } from "../model/country";
import {clearCountry, saveCountyData} from '../store/country.action';

export const initialCountryList: Country[] = [];
export const countryReducer = createReducer(
    initialCountryList,
    on(clearCountry, _=> []),
    on(saveCountyData, (entries, countries) => {
        const entriesClone: Country[] = JSON.parse(JSON.stringify(entries));        
        entriesClone.push(countries);
        return entriesClone;
    })    
)