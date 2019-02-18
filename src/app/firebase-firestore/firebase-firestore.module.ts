import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// angular fire
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FirebaseAngularModule } from "../firebase-angular/firebase-angular.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, FirebaseAngularModule, AngularFirestoreModule],
  exports: [AngularFirestoreModule]
})
export class FirebaseFirestoreModule {}
