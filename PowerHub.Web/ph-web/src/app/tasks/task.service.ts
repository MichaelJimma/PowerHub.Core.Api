import { Injectable } from '@angular/core';
import { TaskDto } from './models/task-dto';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../shared/app-settings.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly baseUrl:string;
  constructor(private http: HttpClient, private config: AppSettingsService) {
    this.baseUrl = config.getSettings().API_URL;
   }

  getTasks(pageNumber: number, pageSize = 3, query = ''): Observable<[TaskDto[],number]> {
    let url = `${this.baseUrl}/tasks`;

    let params = new HttpParams();
    params = params.append('page', pageNumber.toString());
    params = params.append('pageCount', pageSize.toString());
    params = params.append('query', query);

    return this.http
      .get<TaskDto[]>(url, { params: params, observe: 'response'})
      .pipe(map(res => {
        let payload:TaskDto[] = res.body;
        let page:number = Number(res.headers.get('x-pagination'));
        let output: [TaskDto[],number] = [payload, page];
        return output;
      }));
  }

  getTaskById (taskId: string) : Observable<TaskDto> {
    let url = `${this.baseUrl}/tasks/${taskId}`;
    return this.http.get<TaskDto>(url);
  }

  addTask (task: TaskDto) {
    let url = `${this.baseUrl}/tasks`;
    return this.http.post(url, task);
  }

  updateTask (task: TaskDto) {
    let url = `${this.baseUrl}/tasks/${task.taskid}`;
    return this.http.put(url, task);
  }

  deleteTask (id: string) {
    let url = `${this.baseUrl}/tasks/${id}`;
    return this.http.delete(url)
  }
}
