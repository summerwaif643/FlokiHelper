import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { FormService } from '../form.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  guideTitle = "";
  steps = []; 
  card = "";
  
  constructor(
    private data: FormService,
  ) { }

  ngOnInit(): void {
    //get guide title 
    this.guideTitle = this.data.getGuide()

  }

  onAdd(): void{
    //build the card in this.card 
    //
    this.card = "<a> prova </a>";
  }

}
