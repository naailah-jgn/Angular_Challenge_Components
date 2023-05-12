import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BlockComponent } from './block/block.component';
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent,
    BlockComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
