import { Component, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';
import { ApiService } from '../../services/api.services';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent {
  constructor(public ApiService: ApiService, public router: Router) {
    let token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['home']);
    }
  }

  onSubmit(FormData: any) {
    this.ApiService.login(FormData).subscribe({
      next: (v) => {
        console.log(v);
        localStorage.setItem('userdata', JSON.stringify(v.user));
        localStorage.setItem('token', v.token);
        this.router.navigate(['home']);
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => console.info('complete'),
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('phone');

  // Check if phoneInput is not null before using it
  if (phoneInput) {
    intlTelInput(phoneInput as HTMLInputElement, {
      initialCountry: 'in',
      separateDialCode: true,
    });
  } else {
    console.error('Element with id "phone" not found.');
  }
});

// ***********Script to open modal by default*********
// $(window).load(function () {
//   $('#loginModal').modal('show');
// });
