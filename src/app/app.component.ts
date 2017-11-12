import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clinic Finder';
  lat: number = 51.678418;
  lon: number = 7.809007;
  clientaddress: string = "";
}
