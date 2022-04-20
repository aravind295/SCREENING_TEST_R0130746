import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit {
  Object = Object;
  @Input()  countryData: Array<Country> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
