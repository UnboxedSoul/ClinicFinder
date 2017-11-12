import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Clinic } from '../clinic';
import { CLINICS } from '../clinics-data';


@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClinicsComponent implements OnInit {
  clinics = CLINICS;
  selectedClinic: Clinic = this.clinics[0];
  clientAddress: string = "";
  route = this.selectedClinic.address + "-" + this.clientAddress
  distance: number = 0.0;

  onSelect(clinic: Clinic){
    this.selectedClinic = clinic;
    this.route = this.selectedClinic.address + "-" + this.clientAddress    
  }

  constructor() { }

  ngOnInit() {
  }

}
