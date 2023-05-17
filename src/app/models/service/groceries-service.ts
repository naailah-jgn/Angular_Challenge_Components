import { Groceries } from './../groceries.model';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class GroceriesService{
    groceries: Groceries[] = [
        {
            id:1,
            title: 'Pommes de terre',
            description:"",
        },
        {
            id:2,
            title: 'Raclette',
            description:"",
        },
        {
            id:3,
            title: 'Jambon',
            description:"",
        },
        {
            id:4,
            title: 'Cornichons',
            description:"",
        },
        {
            id:5,
            title: 'Chou-fleur',
            description:"",
        }
    ]

    getAllGroceries(): Groceries[]{
        return this.groceries;
    }
}
