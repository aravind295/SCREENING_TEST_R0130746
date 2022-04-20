import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Area } from 'src/app/model/area';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  listControl = new FormControl('', Validators.required);
  @Input() labelName:string = '';
  @Input() list:Array<Area> = [];
  @Input() isDisabled: boolean = false;
  @Output() listChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onchangedorpdown(event: any){
   this.listChange.emit(this.listControl.value);
  }

}
