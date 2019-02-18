import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  declarations: [PostsComponent, PostListComponent, PostAddComponent, PostEditComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
