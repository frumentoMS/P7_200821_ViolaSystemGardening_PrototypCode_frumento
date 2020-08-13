import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'AdminPanel',
  templateUrl: './AdminPanel.component.html',
  styleUrls: ['./AdminPanel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
  }

}
