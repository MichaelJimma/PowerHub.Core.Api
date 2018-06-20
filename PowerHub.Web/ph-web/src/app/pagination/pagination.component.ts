import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AppSettingsService } from '../../shared/app-settings.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input('total-records') set totalRecords(val:number) {
    let totalPages = Math.ceil(val/this.settingsService.getSettings().PAGE_SIZE);
    this.pages = Array(totalPages).fill(0).map((q,i) => i + 1);
  };

  @Input('current-page') currentPage:number;
  @Input('route-path') routePath:string;

  constructor(private settingsService:AppSettingsService) {}

  pages:number[];

  ngOnInit() {
    this.pages = [];
  }
}
