import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Area } from './model/area';
import { Country } from './model/country';
import { CountriesService } from './service/countries.service';
import { selectCountries } from './store/countries.selectors';
import { clearCountry } from './store/country.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  regionLabel = 'Region';
  arRegions = [
    {name : 'Asia', code : 'asia'},
    {name : 'Europe', code : 'europe'}
  ];

  countryLabel = 'Country'
  countryList : Array<Area> = [];
  countryData: Array<Country> = [];
  singleCountyList:Array<Country> =[]
  countryDisable = true;

  constructor(
    private countryService:CountriesService,
    private store:Store
  ) { }

  getRegionValue(value:any){        
    this.store.dispatch(clearCountry())
    this.countryService.getCountryList(value);
    this.store.select(selectCountries).subscribe(data=>{      
      this.countryDisable = false;
      this.countryData = data;
      this.countryList = this.countryService.getDropdownList(data);
    })
  }

  getCountryValue(value:any){
    this.singleCountyList = this.countryData.filter(data => data.code == value);
    console.log(this.singleCountyList);
  }

}
