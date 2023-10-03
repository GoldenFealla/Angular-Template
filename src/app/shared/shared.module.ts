import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  //pipes, components, directives
  declarations: [],

  //modules
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],

  //exports
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class SharedModule { }
