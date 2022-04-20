import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment'
import { Area } from '../model/area';
import { Country } from '../model/country';
import { saveCountyData } from '../store/country.action';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  

  constructor(
    private http: HttpClient,
    private store:Store
    ) { }

  getCountryList(value:string){
    return this.getCountryData(value);     
  }

  getCountryData(value:string){    
    let regionSlug = value.toLowerCase();
    let countyList:Array<Country>;
    this.http.get(environment.regionUrl+regionSlug).subscribe(data => {      
      let stingData = JSON.stringify(data);
      let finalData = JSON.parse(stingData)
      for(let i=0;i<finalData.length;i++){
        if(finalData[i] != undefined){
          this.store.dispatch(saveCountyData(
            {
              code: finalData[i].altSpellings[0],
              name: finalData[i].name?.common,
              capital: finalData[i].capital,
              population: finalData[i].population,
              currencies: finalData[i].currencies,
              flag: finalData[i].flags
            }
          ))          
        }        
      }     
    })
  }

  getDropdownList(data:Array<Country>):Array<Area> {
    return data.map(data => {
      return { name: data.name, code: data.code };
    });
  }
  


}
