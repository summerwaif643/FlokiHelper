import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {
  message = String; 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  checkoutForm = this.formBuilder.group({
    nomeGuida: ''
  });

  ngOnInit(): void {
  }

  onClickSubmit(): void{
    this.message = this.checkoutForm.value['nomeGuida'];
    console.log(this.checkoutForm.value['nomeGuida']);
    this.router.navigate(['/mainpage?=' + this.message]);
  }
}



