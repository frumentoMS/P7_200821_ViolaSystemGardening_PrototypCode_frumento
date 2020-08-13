import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsereGärtenComponent } from './UnsereGärten/UnsereGärten.component';
import { AdminPanelComponent } from './AdminPanel/AdminPanel.component';
import { SensorBeetComponent } from './sensor-beet/sensor-beet.component';

const routes: Routes = [
  { path: 'unsere gärten admin panel', component: UnsereGärtenComponent},
  { path: 'unsere gärten user panel', component: AdminPanelComponent},
  { path: 'Beete', component: SensorBeetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UnsereGärtenComponent, AdminPanelComponent, SensorBeetComponent]
