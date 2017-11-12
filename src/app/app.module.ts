import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ClinicsComponent } from './clinics/clinics.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBc9bR-mBFrEWMqCEdAA4-s6XPbVYuyTYw'
    })
  ],
  declarations: [
    AppComponent,
    ClinicsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
