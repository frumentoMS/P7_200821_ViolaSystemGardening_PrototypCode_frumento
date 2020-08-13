import { Component, OnInit } from '@angular/core';
import { AuthorisedSideNavService } from '../services/authorised-side-nav.service';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'UnsereGärten',
  templateUrl: './UnsereGärten.component.html',
  styleUrls: ['./UnsereGärten.component.css']
})
export class UnsereGärtenComponent implements OnInit {

  newMember:string="";
  newTask:string="";

  constructor(public router:Router, public sideNavService: AuthorisedSideNavService, public dataService: DataServiceService) {
    
   }

  ngOnInit() {
  }

  public goToUsePanel(){
    this.router.navigate(['unsere gärten user panel']);
  }

  public addMember(){
    this.dataService.mitglieder.next([this.newMember]);
    this.newMember = "";
    this.sideNavService.showAddMember=false;
    this.dataService.notificationCount++;
  }

  public addTask(){
    this.dataService.aufgaben = "befüllt";
    this.newTask = "";
    this.sideNavService.showAddTask=false;
  }

}
