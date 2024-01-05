import { Component, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';
declare var $: any;
@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent {}

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
