import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  public headerTitle:string = "Verwaltung";
  public constructor(public router:Router,  public dataService: DataServiceService) {
    router.events.subscribe((event:any) => {
      if(event instanceof  NavigationStart){
      console.log("event",event);
      this.headerTitle = decodeURI(event.url.substring(1));
      if(this.headerTitle == "") this.headerTitle = "startscreen";
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
    
  }  

  navigate(){
    this.router.navigate(['Unsere Gärten']);
  }

  navigate2(){
    this.router.navigate(['Verwaltung']);
  }

  navigate3(){
    this.router.navigate(['Beete']);
  }

  navigate4(){
    this.router.navigate(['Verwaltung']);
  }

  navigate5(){
    this.router.navigate(['Beete']);
  }


  title = 'ViolaSmartGardening';
}






