import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flokihelper2';

  message = String; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  checkoutForm = this.formBuilder.group({
    nomeGuida: ''
  });

  onClickSubmit(): void{
    this.message = this.checkoutForm.value;
    console.log(this.message);
    this.router.navigate(['/mainpage']);
  }
}
