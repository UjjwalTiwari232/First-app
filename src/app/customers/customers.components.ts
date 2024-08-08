import { Component, OnInit } from "@angular/core";  
import { ICustomer } from "../shared/interfaces";

import { DataService } from "../core/data.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector:"app-customers",
    templateUrl:'./customers.components.html',
})

export class CustomersComponent implements OnInit{
    
    title:string="";
    people: ICustomer[] = [];
    people1: String[] = [];
    constructor( private dataService:DataService, private route: ActivatedRoute ) {  }
    
    

    ngOnInit(): void {
        this.title = 'Customers';
        // this.route.paramMap.subscribe(params => {
        //     const ids = params.get('list'); // Retrieve the 'ids' parameter from the URL
        //     console.log(ids);
            
        //     if (ids) {
        //         const decodedString = decodeURIComponent(ids); // Decode the JSON string
        //         this.people1 = JSON.parse(decodedString); // Parse the JSON string back into an array
               
        //         console.log("IDs retrieved:", this.people1);
        //         // Optional: You can filter or handle specific customers based on ids here
        //     }
        // });
        // let id = (this.route.snapshot.paramMap.get('id')!);
        console.log(this.people1);
        
        this.dataService.getCustomers()
            .subscribe(( customers:ICustomer[] ) =>{
                // localStorage.setItem("customers",JSON.stringify(customers))
                console.log(JSON.parse(localStorage.getItem("customers")!));
                
                 this.people = JSON.parse(localStorage.getItem("customers")!);
                } );
        
        
    }

    
    
}