import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BlockComponent } from './block/block.component';
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { GroceriesComponent } from './groceries/groceries.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [AppComponent,
    BlockComponent,
    UserProfileComponent,
    GroceriesComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
