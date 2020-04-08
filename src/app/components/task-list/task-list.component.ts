import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {TaskServiceService} from '../../services/task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.taskService.findAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }

}
