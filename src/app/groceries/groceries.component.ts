import { GroceriesService } from './../models/service/groceries-service';
import { Router } from '@angular/router';
import { Groceries } from './../models/groceries.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit{
  groceries: Groceries[] = [];
  
  constructor(private GroceriesService: GroceriesService, private router: Router) {
  }

  ngOnInit(): void {
    this.groceries = this.GroceriesService.getAllGroceries();
  }
}