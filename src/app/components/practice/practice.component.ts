import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css',
})
export class PracticeComponent {
  title = 'Api Call in Angular';
  users: any;
  products: any = [];

  constructor(private userData: UserdataService) {
    this.userData.users().subscribe((data: any) => {
      console.warn('data', data);
      this.products = data.products;
      console.log(this.products);
    });
  }
}
