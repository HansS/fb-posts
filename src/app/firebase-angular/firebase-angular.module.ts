import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// angular fire
import { AngularFireModule } from "@angular/fire";
import { environment } from "../../environments/environment";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, "my-app")
  ],
  exports: [AngularFireModule]
})
export class FirebaseAngularModule {}
