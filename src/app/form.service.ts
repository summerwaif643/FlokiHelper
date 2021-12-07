import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private data = ''
  constructor(
 

  ) { }

  setGuide(obj: any): void{
    this.data = obj
  }

  getGuide(){
    return this.data
  }
  
}
