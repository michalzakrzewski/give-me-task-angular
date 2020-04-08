import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tasksUrl: string;

  constructor(private httpClient: HttpClient) {
    this.tasksUrl = 'http://localhost:8080/api/tasks';
  }

  public findAllTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.tasksUrl);
  }
}
