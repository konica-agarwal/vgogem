import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DiamondComponent } from './diamond/diamond.component';
import { CoalComponent } from './coal/coal.component';
import { PlantComponent } from './plant/plant.component';
import { CoinflipComponent } from './coinflip/coinflip.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'diamond', component: DiamondComponent },
  { path: 'coal', component: CoalComponent },
  { path: 'plant', component: PlantComponent },
  { path: 'coinflip', component: CoinflipComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }