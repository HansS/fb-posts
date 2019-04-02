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
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SigninComponent, UserComponent, UserListComponent, UserEditComponent],
  imports: [
    CommonModule,
    FirebaseAngularModule,
    AngularFireAuthModule,
    AuthRoutingModule
  ],
  exports: [AngularFireAuthModule]
})
export class AuthModule {}
