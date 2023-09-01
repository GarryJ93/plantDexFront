import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PageAddPlantComponent } from './pages/page-add-plant/page-add-plant.component';
import { PageUpdateComponent } from './pages/page-update/page-update.component';

const routes: Routes = [{path:'', redirectTo:'home', pathMatch:"full"},
                        {path:'home', component: PageHomeComponent},
                        {path:'my-plants', component:PageMyPlantsComponent},
                        {path:'admin', component:PageAdminComponent},
                        {path: 'plant/:id', component: PlantDetailComponent },
                        {path: 'add', component: PageAddPlantComponent },
                        {path: 'update', component: PageUpdateComponent},
                        {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
