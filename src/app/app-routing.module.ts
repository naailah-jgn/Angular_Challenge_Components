import { BlockComponent } from './block/block.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
  {
    path: 'userInfo', component: UserProfileComponent
  },
  {
    path: 'blockInfo', component: BlockComponent
  },
  {
    path: 'groceriesInfo', component: GroceriesComponent
  },
  {
    path: 'groceriesInfo/:id', component: GroceriesComponent
  },
  {
    path: 'ingredientsInfo', component: IngredientsComponent
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{}
