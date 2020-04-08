import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {TaskListComponent} from './components/task-list/task-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'tasks', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
