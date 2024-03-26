import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../app/shared/shared.module';
import { DepartmentDetailsComponent } from './home-page/department-details/department-details.component';
import { ArtObjectCardComponent } from './home-page/art-object-card/art-object-card.component';
import { ArtObjectDetailsDialogComponent } from './home-page/art-object-details-dialog/art-object-details-dialog.component';
import { HeaderComponent } from './home-page/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent, DepartmentDetailsComponent, ArtObjectCardComponent, ArtObjectDetailsDialogComponent, HeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, 
    MatIconModule,
  MatInputModule,
  MatFormFieldModule,],
})
export class HomeModule {}
