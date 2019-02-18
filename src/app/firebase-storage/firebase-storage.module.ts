import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// angular fire
import { AngularFireStorageModule } from "@angular/fire/storage";
import { FirebaseAngularModule } from "../firebase-angular/firebase-angular.module";
@NgModule({
  declarations: [],
  imports: [CommonModule, FirebaseAngularModule, AngularFireStorageModule],
  exports: [AngularFireStorageModule]
})
export class FirebaseStorageModule {}
