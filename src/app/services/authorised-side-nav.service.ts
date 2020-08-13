import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class AuthorisedSideNavService {
  hideSideNav: boolean = true;
  showAddMember:boolean = false;
  showAddTask:boolean=false;
 
  constructor() { }
 
  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}