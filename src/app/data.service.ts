import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor() { }
  showGoals(){
   return ['Visit 100 countries', 'Learn 5 languages', 'Be a Digital Nomad'];
  }
}
