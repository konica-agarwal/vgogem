import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { DashboardComponent } from './dashboard/dashboard.component';
import { DiamondComponent } from './diamond/diamond.component';
import { CoalComponent } from './coal/coal.component';
import { PlantComponent } from './plant/plant.component';
import { CoinflipComponent } from './coinflip/coinflip.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRoutingModule } from './app-routing.module';




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      backgroundPadding: -4,
      radius: 91,
      space: -4,
      toFixed: 0,
      outerStrokeWidth: 4,
      outerStrokeColor: "#808080",
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 4,
      animateTitle: false,
      animationDuration: 1000,
      showTitle: false,
      showSubtitle: false,
      showUnits: false,
      clockwise: false,
      responsive: true
    })
  ],
  declarations: [
    AppComponent,
    DiamondComponent,
    CoalComponent,
    PlantComponent,
    CoinflipComponent,
    ProfileComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

