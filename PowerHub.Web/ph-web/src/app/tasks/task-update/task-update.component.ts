import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TaskDto } from 'src/app/tasks/models/task-dto';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Params } from '@angular/router';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  form:FormGroup;
  constructor(
    private fb: FormBuilder, 
    private taskService:TaskService, 
    private router: Router,
    private route: ActivatedRoute) { 
    this.form = fb.group({
      taskid: new FormControl({value: '', readonly: true}),
      key: new FormControl({value: '', readonly: true}),
      name: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
      description: '',
    });
  }

  invalidNameMessage:string = 'Name is required (max 200 characters)';

  ngOnInit() {
    
    let id = this.route.snapshot.paramMap.get('id');
    this.taskService
      .getTaskById(id)
      .subscribe(q => {
        Object.keys(q).forEach(w => this.form.controls[w].patchValue(q[w]))
      });
  }

  onSubmit() {
    let task = <TaskDto>this.form.value;
    this.taskService.updateTask(task)
      .subscribe(() => this.router.navigate(['/tasks']));
  }

}
