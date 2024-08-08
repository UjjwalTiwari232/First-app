import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {
  name: string = "";
  city:string = ""
  order:number = 0;
  people:ICustomer[] = [];


   constructor(private dataService:DataService, private router:Router) {}

  ngOnInit(): void {
    this.dataService.getCustomers()
            .subscribe(( customers:ICustomer[] ) => this.people = customers );
  }

  @Output() newCustomerEmitter: EventEmitter<ICustomer> = new EventEmitter<ICustomer>();

  handleSubmit(){
  
    let newCustomer:ICustomer = {
      id: this.generateUniqueId(),
      name: this.name,
      city:this.city,
      orderTotal:this.order,
      customerSince:null
    }

    this.people.push(newCustomer);
    //
    // Serialize the entire people array to JSON
    const serializedList = JSON.stringify(this.people);

    // Encode the serialized JSON string
    const encodedList = encodeURIComponent(serializedList);
    console.log(encodedList)
    // const serializedList = JSON.stringify(serializedList1); // Serialize only IDs
    this.router.navigate(['/customers',encodedList]);

  }
  // Function to generate a unique ID
  private generateUniqueId(): number {
    return this.people.length > 0 ? Math.max(...this.people.map(c => c.id)) + 1 : 1;
}

}
