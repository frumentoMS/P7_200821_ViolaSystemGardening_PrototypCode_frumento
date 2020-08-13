import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  mitglieder:BehaviorSubject<any[]>;
  aufgaben: string = "";
  notificationCount:number = 0;

  constructor() { 
    this.mitglieder = new BehaviorSubject(null);
  }
}
