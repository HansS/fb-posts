import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// app
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PostFilterPipe } from "./posts/post-filter.pipe";
// app layout
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { FirebaseAngularModule } from "./firebase-angular/firebase-angular.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    FirebaseAngularModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
