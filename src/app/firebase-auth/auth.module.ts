import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// angular fire auth
import { AngularFireAuthModule } from "@angular/fire/auth";
// app auth
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SigninComponent } from "./signin/signin.component";
import { FirebaseAngularModule } from "../firebase-angular/firebase-angular.module";

@NgModule({
  declarations: [AuthComponent, LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    FirebaseAngularModule,
    AngularFireAuthModule,
    AuthRoutingModule
  ],
  exports: [AngularFireAuthModule]
})
export class AuthModule {}
