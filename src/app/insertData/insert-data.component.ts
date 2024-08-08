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
    localStorage.setItem("customers",JSON.stringify(this.people));
    this.router.navigate(['/customers']);

  }

  private generateUniqueId(): number {
    return this.people.length > 0 ? Math.max(...this.people.map(c => c.id)) + 1 : 1;
}

}
