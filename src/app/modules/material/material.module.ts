import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

// Modulos de Material
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }