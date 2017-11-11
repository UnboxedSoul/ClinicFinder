import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Clinic } from '../clinic';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClinicsComponent implements OnInit {
  clinic: Clinic  = {
	id: 1,
	name:  'Annapolis Clinic',
	address: 'some address',
	phone: '5558675309',
	specialties: 'fixin shit'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
