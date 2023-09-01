import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { CardComponent } from './components/card/card.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SoleilComponent } from './components/soleil/soleil.component';
import { GoutteComponent } from './components/goutte/goutte.component';
import { PlantAdminComponent } from './components/plant-admin/plant-admin.component';
import { TabAdminComponent } from './components/tab-admin/tab-admin.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import {  PageAddPlantComponent } from './pages/page-add-plant/page-add-plant.component';
import { PageUpdateComponent } from './pages/page-update/page-update.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyPlantsComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    PlantListComponent,
    CardComponent,
    FilterBarComponent,
    SearchBarComponent,
    SideBarComponent,
    SoleilComponent,
    GoutteComponent,
    PlantAdminComponent,
    TabAdminComponent,
    PlantDetailComponent,
    PageAddPlantComponent,
    PageUpdateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
