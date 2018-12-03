import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CounterModule} from 'angular-circle-counter';
import { FlipModule } from 'ngx-flip';
import { AngularResizedEventModule } from 'angular-resize-event';
import { FormsModule }   from '@angular/forms';



import { DashboardComponent } from './dashboard/dashboard.component';
import { DiamondComponent } from './diamond/diamond.component';
import { CoalComponent } from './coal/coal.component';
import { PlantComponent } from './plant/plant.component';
import { CoinflipComponent } from './coinflip/coinflip.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { CoinFlipHistoryComponent } from './coin-flip-history/coin-flip-history.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { IconComponent } from './icon/icon.component';
import { FormComponent } from './form/form.component';
import { ModaComponent } from './moda/moda.component';




@NgModule({
  imports: [
    BrowserModule,
     FormsModule,
    AppRoutingModule,
    DragScrollModule,
    CounterModule,
     FlipModule,
    BrowserAnimationsModule,
    AngularResizedEventModule,
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
    DashboardComponent,
    CoinFlipHistoryComponent,
    DoughnutComponent,
    TopPanelComponent,
    IconComponent,
    FormComponent,
    ModaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

