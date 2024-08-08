import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InsertDataComponent } from './insert-data.component';
import { InsertDataRoutingModule } from './insert-data-routing.module';



@NgModule({
  declarations: [ InsertDataComponent ],
  imports: [
    CommonModule,
    FormsModule,
    InsertDataRoutingModule
    
  ]
})
export class InsertDataModule { }
