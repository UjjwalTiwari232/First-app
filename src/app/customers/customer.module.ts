import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.components';
import { CustomersListComponent } from './customers-list/customer-list.components';
import { FilterTextboxComponent } from './customers-list/filter-textbox.components';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, 
    CustomersRoutingModule,
 
  ],
  exports:[CustomersComponent]
  ,
  providers: [],
  bootstrap: [CustomersComponent]
})
export class CustomerModule { }
