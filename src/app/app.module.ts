import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customers/customer.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { InsertDataModule } from './insertData/insert-data.module';
import { FormsModule } from '@angular/forms';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { DeleteDataModule } from './delete-data/delete-data.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    CustomerModule,
    InsertDataModule,
    DeleteDataModule,
    OrdersModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
