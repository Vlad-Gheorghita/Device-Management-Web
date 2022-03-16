import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgScrollbarModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    NgScrollbarModule
  ]
})
export class SharedModule { }
