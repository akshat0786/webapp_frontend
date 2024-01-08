import { Component, OnInit } from '@angular/core';
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
  providers:[ApiService]
})
export class MainHeaderComponent {

  public phone:any;
  public otp: any;

  constructor(public apiService: ApiService, public router: Router) {
    let token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['home']);
    }
  }
}


