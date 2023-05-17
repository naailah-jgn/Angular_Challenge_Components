import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  title: string = 'Raclette party 🧀';
  isThisIngredientVital: boolean = true;
  isGuestListDisplayed: boolean = false;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
}
