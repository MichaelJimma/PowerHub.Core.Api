import { Component, OnInit } from '@angular/core';
import { TaskDto } from 'src/app/tasks/models/task-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  form:FormGroup;
  constructor(
    private fb: FormBuilder, 
    private taskService:TaskService,
    private router: Router) { 
    this.form = fb.group({
      key: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(50)
      ])],
      name: ['', Validators.compose([
        Validators.required, Validators.maxLength(200)
      ]) ],
      description: ''
    });
  }

  invalidKeyMessage:string = 'Key is required (min 3, max 50 characters)';
  invalidNameMessage:string = 'Name is required (max 200 characters)';

  ngOnInit() {
  }

  onSubmit() {
    let task = <TaskDto>this.form.value;
    this.taskService.addTask(task).subscribe(() => this.router.navigate(['/tasks']));
  }
}
